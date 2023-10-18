const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors({ methods: ["PUT", "POST", "GET", "PETCH"], credentials: true }));
app.use(express.static(path.join(__dirname, "./front-end/dist")));
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./", "front-end", "dist", "index.html")
  );
});

app.listen(3500, () => {
  console.log("listening on 3500");
});

module.exports = app;
