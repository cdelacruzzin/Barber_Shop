

const express = require('express');
const app = express();
const path = require('path'); //imports the path module, which is a node.js module to work with directories and files


app.use(express.urlencoded({ extended: true }));
/*
This line tells Express to parse incoming requests with URL-encoded payloads—which is commonly used when submitting HTML forms.
When a client (like an HTML form) submits data using:
<form method="POST" action="/submit">
  <input type="text" name="username" />
  <button type="submit">Send</button>
</form>
Express doesn't automatically parse the form data. So you need express.urlencoded() middleware to make req.body work in your route.
 */

app.use(express.json()); //middleware to parse incoming JSON data (API requests)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}
/*
if (process.env.NODE_ENV === 'production') {

    Checks if your app is running in production mode (e.g., on a live server like Heroku, Vercel, or AWS).
    This prevents the React app from being served during local development, where you'd use npm start in the React folder.

app.use(express.static(path.join(__dirname, '../client/build')));

    Serves the React compiled frontend (from the client/build folder) as static files.
    path.join(__dirname, '../client/build') combines your current backend folder path with the relative path to the React build folder.
    express.static(...) makes those files (like index.html, bundle.js, etc.) accessible by the browser.
 */

app.get('/', (req, res) => { ///defines a router for the "/" endpoint
    res.sendFile(path.join(__dirname, '../client/build/index.html'));   //acts as an entry point. Once hit, send back the "index.html" from the build directopry
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


