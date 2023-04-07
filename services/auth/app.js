const express = require("express");

const app = express();
const port = 5050;
app.get("/", (req, res) => {
  res.send("This is auth service");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
