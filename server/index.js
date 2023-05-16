const express = require("express");
const cors = require('cors');


const PORT = 8000;

const app = express();
app.use(cors());


// backend express server to handle backend functionality.
app.get("/api", (req, res) => {
    res.json({ message: "Sean John!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});