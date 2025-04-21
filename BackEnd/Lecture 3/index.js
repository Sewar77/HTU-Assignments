import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

const password = "password";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

function rightPassword(req, res, next) {
  req.correctPassword = false;
  if (req.body) {
    if (req.body.password === password) {
      req.correctPassword = true;
    }
  }
  next();
}

app.use(rightPassword);

app.post("/submit", (req, res) => {
  if (req.correctPassword) {
    res.sendFile(__dirname + "/public/respond.html");
  } else {
    res.send("wrong password");
  }
});

app.listen(port, () => {
  console.log("server. ");
});
