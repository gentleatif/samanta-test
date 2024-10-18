const express = require("express");
const StringCalculator = require("./stringCalculator");

const app = express();
app.use(express.json());

const calculator = new StringCalculator();

app.post("/calculate", (req, res) => {
  try {
    const { numbers } = req.body;
    const result = calculator.add(numbers);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
