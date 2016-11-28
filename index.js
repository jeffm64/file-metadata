var express = require("express");
var app = require("./server/app");

app.listen(process.env.PORT || 8080, function () {
  console.log('App listening on port 8080!');
});

