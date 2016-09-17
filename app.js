var express = require('express');
var app = express();

//Serve static content from public folder
app.use(express.static('public'));

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});