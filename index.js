const http = require("http");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const { register } = require("ts-node");
const name = "lodi";

const { compilerOptions } = require("./tsconfig.json");

const app = express();

app.use(express.json());
app.use(express.static("express"));

app.use("/public", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

// function runTS(filepath) {
//   // Create a new Typescript compiler instance and register it onto index.js
//   register({ compilerOptions });

//   const result = require(filepath);
//   return result.default || result;
// }

// if (typeof window == "object") {
//   runTS("./public/index.ts");
// } else {
//   return console.error("You can't run it on Node environment!");
// }

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug(`Server listening on port ${port}`);
