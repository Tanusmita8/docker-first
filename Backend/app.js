const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from BACKEND container" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
