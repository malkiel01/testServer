const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/test', (req, res) => {
  console.log('hi test');
  res.send('hi test');
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
