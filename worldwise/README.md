# WorldWise

An app that uses geolocation, react datepicker, leaflet

On home screen click "login" or "start tracking now" button to go to login screen. An autofilled fake authentication page will appear click login to continue to app. A list of cities in the json server I created will populate on left sidebar, right sidebar will be the map, there is also a user with a logout button in the top right.
Clicking the X on a city will delete it, clicking a city on your list will have the information you filled out popup as well as a link to wikipedia for that city. Clicking on any city on the map will prompt you to add the visited city ot your list autofilling the city name, and the current date- click the date input to change the date with datepicker. You can also input a note about the city, click add to add to your list. Adding a city will also automatically add the country to your countries list if it is your first time adding a city from that country.
Adding a city to your list will add a pin to the map, which will be removed upon city deletion.

Skills utilized in this app include: useContext, useNavigate, BrowserRouter, ProtectedRoute, useEffect, css modules
