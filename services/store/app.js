const express = require("express");
const StoreRecords = require("./mock/store.json");

const app = express();
const port = 5052;

app.get("/", (req, res) => {
  res.send({
    name: "store service",
    version: "0.0.1",
  });
});

app.get("/store", (req, res) => {
  const payload = {
    data: StoreRecords,
  };
  res.send(payload);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
