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

app.get("/peanut-butter-fudge", function(request, response) {
  response.render("peanut_butter_fudge");
});

app.get("/belgian-waffles", function(request, response) {
  response.render("belgian_waffles");
});

app.get("/pavlova", function(request, response) {
  response.render("pavlova");
});

app.get("/all", function(request, response) {
  response.render("all");
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, function() {
    console.log("server started successfully");
});