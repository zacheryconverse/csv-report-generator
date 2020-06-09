const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));

/*
- The client app should be able to submit JSON data to the server, receive a response
containing a CSV-formatted result (the way this is done will vary depending on where
you are in the challenge).
- Initially, submission of the JSON data (from the client to server) should be done
using an HTML form with a single textarea input field (for the entire JSON text) and
a submit button. When the user clicks submit, POST the form data to the server. The
form submission process should use the default browser action/behavior. DO NOT use
jQuery/AJAX functions in the submission process.
*/

