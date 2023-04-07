const express = require("express");

const app = express();
const port = 5051;
app.get("/", (req, res) => {
  res.send("This is payment service");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
