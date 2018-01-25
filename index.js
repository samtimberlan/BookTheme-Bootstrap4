const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res)=>{
  res.sendFile('index.html');
});

const port = process.env.PORT || 3000
app.listen(port, ()=>{
  console.log("A Wonderful site is running on " + port);
});