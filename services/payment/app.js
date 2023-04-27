const express = require("express");

const app = express();
const port = 5051;
app.get("/", (req, res) => {
  res.send({
    name: "payment service",
    version: "0.0.1",
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
