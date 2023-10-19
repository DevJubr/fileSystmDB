const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();
const filePath = "db.json";
app.use(express.json());
app.use(cors({ methods: ["PUT", "POST", "GET", "PETCH"], credentials: true }));
app.use(express.static(path.join(__dirname, "./front-end/dist")));

app.post("/creatP", (req, res) => {
  // 2. Parse the JSON content
  const fileContent = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContent);

  // 3. Modify the data structure
  const newItem = req.body; // Assuming you're sending the new item in the request body
  data.arrayName.push(newItem);

  // 4. Convert the modified data back to JSON
  const updatedJSON = JSON.stringify(data, null, 2);

  // 5. Write the updated JSON content back to the file
  fs.writeFileSync(filePath, updatedJSON, "utf8");

  res.status(200).json({ message: "Item added to the array" });
});

app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./", "front-end", "dist", "index.html")
  );
  // res.send("hi bro");
});

app.listen(3500, () => {
  console.log("listening on 3500");
});

module.exports = app;
