const express = require("express");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");


const app = express();

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


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

app.get("/roasted-potatoes", function(request, response) {
  response.render("roasted_potatoes");
});

app.get("/ramen-stir-fry", function(request, response) {
  response.render("ramen_stir_fry");
});

app.get("/biscotti", function(request, response) {
  response.render("biscotti");
});

app.get("/chicken-katsu", function(request, response) {
  response.render("chicken_katsu");
});

app.get("/all", function(request, response) {
  response.render("all");
});

app.get("/about", function(request, response) {
  response.render("about");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.post("/contact", function(req, res) {
  console.log(req.body);
  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS
      }
    });
    
    var mailOptions = {
      from: 'automatedsender12.90@gmail.com',
      to: 'chris.oreilly97@gmail.com',
      subject: 'New Message from COCO\'s',
      text: "New message from "+ req.body.name + " at " + req.body.email + "\r\n" + req.body.name + "'s message:\r\n\r\n" + req.body.message
  };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.render("contact-success");
      }
    });
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, function() {
    console.log("server started successfully");
});