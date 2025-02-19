// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
  const { collegeEmailId, collegeRollNumber, numbers, alphabets } = req.body;
  const userId = 'john_doe_17091999'; // Replace with your user ID
  const isSuccess = true; // Replace with your logic to determine success

  const response = {
    status: 'success',
    user_id: userId,
    college_email_id: collegeEmailId,
    college_roll_number: collegeRollNumber,
    numbers: numbers,
    alphabets: alphabets,
    is_success: isSuccess,
  };

  res.json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  const operationCode = 'BFHL001'; // Replace with your operation code
  res.json({ operation_code: operationCode });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(Server listening on port ${port});
});



