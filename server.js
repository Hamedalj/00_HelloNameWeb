let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;



let names = []; // Array to store names
greeting = `<h1>Hello ????</h1>`;
app.get('/', (req, res) => {
    let greeting = '';
    if (names.length > 0) {
      //
      // Code here to create greeting using names array  greeting = ????;
      //
      greeting = `<h1>Hello ????</h1>`;
    }
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Enter Name</title>
      </head>
      <body>
          ${greeting}
          //
          // Code here to create form with text input and submit to /submit-name
          //
      </html>
    `);
  });

app.post('/submit-name', (req, res) => {
    const name = req.body.username;
  // Code here to save name
    res.redirect('/');
  });
// New route to list all names
app.get('/names', (req, res) => {
    let namesList = '<ul>';
   //
   // Code here to create list of names using <li> elements
   //
    namesList += '</ul>';
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Name List</title>
      </head>
      <body>
          <h1>All Names</h1>
          ${namesList}
          <p><a href="/">Back</a></p>
      </body>
      </html>
    `);
  });
  
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
