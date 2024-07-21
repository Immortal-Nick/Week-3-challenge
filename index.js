document.addEventListener("DOMContentLoaded", () => {
    const filmsList = document.getElementById('films');
    const movieTitle = document.getElementById('movie-title');
    const moviePoster = document.getElementById('movie-poster');
    const movieRuntime = document.getElementById('movie-runtime');
    const movieShowtime = document.getElementById('movie-showtime');
    const availableTickets = document.getElementById('available-tickets');
    const buyTicketButton = document.getElementById('buy-ticket-btn');
    let currentFilm = null; // Track the currently selected film

    // Fetch all films
    fetch("http://localhost:3000/films")
        .then(response => response.json())
        .then(films => {
            films.forEach(film => {
                // Create a list item for each film
                const li = document.createElement('li');
                li.className = 'film item';
                li.innerText = film.title;
                li.dataset.id = film.id; // Store film id
                filmsList.appendChild(li);

                // Event listener for film selection
                li.addEventListener('click', () => displayFilmDetails(film));
            });

            // Display the first film details initially
            if (films.length > 0) {
                displayFilmDetails(films[0]);
            }
        });

    // Function to display film details
    function displayFilmDetails(film) {
        currentFilm = film; // Set the current film

        movieTitle.innerText = film.title;
        moviePoster.src = film.poster;
        movieRuntime.innerText = film.runtime;
        movieShowtime.innerText = film.showtime;
        availableTickets.innerText = film.capacity - film.tickets_sold;

        // Update the button based on available tickets
        updateBuyTicketButton();
    }

    // Function to update the buy ticket button
    function updateBuyTicketButton() {
        const ticketsSold = currentFilm.tickets_sold;
        const capacity = currentFilm.capacity;
        const available = capacity - ticketsSold;

        if (available > 0) {
            buyTicketButton.innerText = 'Buy Ticket';
            buyTicketButton.disabled = false; // Enable the button
            buyTicketButton.onclick = () => buyTicket(); // Set buy ticket function
        } else {
            buyTicketButton.innerText = 'Sold Out';
            buyTicketButton.disabled = true; // Disable the button
        }
    }

    // Function to buy a ticket
    function buyTicket() {
        if (currentFilm) {
            // Increment tickets sold
            currentFilm.tickets_sold += 1; 
            displayFilmDetails(currentFilm); // Update UI with new details
        }
    }
});