const express = require('express');
const app = express()

const path = require('path')


const portNumber = 8000
app.use(express.static(path.resolve(__dirname, '../myapp/build')));
// home page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../myapp/build', 'index.html'));
    console.log("ran this baby");
  })

  app.listen(portNumber, () => {
    console.log(`Server listening on ${portNumber}`);
  });



// Handle GET requests to /api route


// All other GET requests not handled before will return our React app
