# Week-3-challenge
# Overview
This is a simple web application for booking movie tickets. It displays a list of movies, shows detailed information about each selected movie, and allows users to purchase tickets if available.


# HTML Structure
The index.html file sets up the basic layout of the application:

Head: Includes meta tags for character set and viewport settings, a title, and a link to the external CSS file.
Body: Contains the main container with two sections:
Movies Section: Displays movie details including poster, title, runtime, showtime, available tickets, and a "Buy Ticket" button.
Movie List Section: Displays a list of movies fetched from the server.


# CSS Styling
The style.css file provides styling for the application:

Body: Uses Helvetica Neue, a light background, and a color scheme for text.
Container: Uses flexbox for layout with padding and gap between sections.
Movie Details: Styled with background, padding, border-radius, and shadow effects.
Buttons: Styled with colors, padding, and hover effects.
Movie List: Styled for interactivity with hover effects.

# JavaScript Functionality
The index.js file contains the logic for the application:

Fetching Films: Fetches a list of movies from the server and populates the movie list.
Displaying Film Details: Displays detailed information about the selected movie.
Buying Tickets: Allows users to buy tickets and updates the UI accordingly.


# Key Functions
displayFilmDetails(film): Updates the UI with the details of the selected film.
updateBuyTicketButton(): Updates the "Buy Ticket" button based on ticket availability.
buyTicket(): Handles the ticket purchase logic and updates the UI.
Event Listeners
DOMContentLoaded: Fetches films and sets up the initial state of the application.
Film List Items: Adds click event listeners to each film list item to display the corresponding film details.
