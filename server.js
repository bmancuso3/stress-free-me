const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const sequelize = require("./config/connection");

//Setting up Express.JS
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware that allows Handlebars.JS engine to be used as template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controller/homeRoutes"));

app.listen(PORT, () => {
  console.log("We are now listening to http://localhost:" + POST);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
