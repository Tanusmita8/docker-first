const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from BACKEND container" });
});

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
