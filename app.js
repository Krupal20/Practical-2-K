const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, this is a code by Krupal to test pipeline and this is the second version student ');
  });
  const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});