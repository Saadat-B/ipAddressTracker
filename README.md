# IP Address Tracker

This web application allows you to track the location of an IP address or domain name and provides detailed information about the geographical location. The application utilizes the [Leaflet](https://leafletjs.com/) library to display the location on a map.

## Features

- **IP Address Tracking:** Enter an IP address or domain name in the input field and click the "Track" button to retrieve information about the location.
- **Map Display:** The application displays the location on an interactive map powered by [OpenStreetMap](https://www.openstreetmap.org/).
- **Detailed Information:** The retrieved information includes the IP address, location, region, and country.

## How to Use

1. Open the `index.html` file in a web browser.
2. Enter the IP address or domain name in the input field.
3. Click the "Track" button or press Enter to fetch and display the information.
4. The card below the input field will be updated with details, and the map will center on the specified location.

## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Leaflet](https://leafletjs.com/): An open-source JavaScript library for interactive maps.
- [IPStack API](https://ipstack.com/): Used to retrieve location information based on the provided IP address.

## Files

- **index.html:** The main HTML file containing the structure of the web page.
- **style.css:** The CSS file for styling the web page.
- **app.js:** The JavaScript file containing the logic for fetching and updating IP address information.

## Dependencies

- [Leaflet CSS](https://unpkg.com/leaflet/dist/leaflet.css)
- [Leaflet JavaScript](https://unpkg.com/leaflet/dist/leaflet.js)

## Acknowledgments

- This application uses [OpenStreetMap](https://www.openstreetmap.org/) for map data.
- IPStack API is used for retrieving IP address location information.
