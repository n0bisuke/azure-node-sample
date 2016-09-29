const express = require('express');
const app = express();
const PORT = process.env.PORT || 1337;

app.get('/', (req, res) => {
  res.send('Hello World')
});
 
app.listen(PORT);