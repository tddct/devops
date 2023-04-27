const express = require("express");

const app = express();
const port = 5050;
app.get("/", (req, res) => {
  res.send({
    name: "auth service",
    version: "0.0.1",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
