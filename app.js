const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.get("/", function(request, response) {
  response.render("home");
});

app.get("/yogurt-parfait", function(request, response) {
  response.render("yogurt_parfait");
});

app.get("/pizza-dough", function(request, response) {
  response.render("pizza_dough");
});

app.get("/panna-cotta", function(request, response) {
  response.render("panna_cotta");
});

app.get("/caramel-corn", function(request, response) {
  response.render("caramel_corn");
});

app.get("/crisp", function(request, response) {
  response.render("crisp");
});

app.get("/banh-mi", function(request, response) {
  response.render("banh_mi");
});

app.get("/korean-bbq", function(request, response) {
  response.render("korean_bbq");
});

app.get("/pita", function(request, response) {
  response.render("pita");
});

app.listen(3000, function() {
  console.log("listening on port 3000");
});
