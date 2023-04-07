const express = require("express");

const app = express();
const port = 5052;
app.get("/", (req, res) => {
  res.send("This is store service");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
