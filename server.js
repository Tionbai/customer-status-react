const express = require("express");
const customerData = require("./customerData.json");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/data", (req, res) => {
  res.json(customerData);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
