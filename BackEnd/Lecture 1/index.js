import express from "express";
import bodyParser from "body-parser";
// body parser should be user before the routing handling.
import { dirname } from "path"; //to use html we should use these
import { fileURLToPath } from "url"; //and these
//these two are to access the html page.

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

let userInfo = {
  email: null,
  password: null,
};

app.use(bodyParser.urlencoded({ extended: true }));

//save value that comes from client side.
function saveToDb(req, res, next) {
  console.log(req.body);
  //should be next every time, to move on to the next line. if there is no next it will stuck in these function.
  if (req.body) {
    (userInfo.email = req.body["email"]),
      (userInfo.password = req.body["password"]);
  }
  next();
}

app.use(saveToDb);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  //console.log(req.body);
  res.send(
    `<h1>Your email ${userInfo.email} and password ${userInfo.password}</h1>`
  );
});

// app.get("/", (req, res) => {
//   res.sendStatus(201);
// });

// app.post("/about", (req, res) => {
//   console.log(req.body);
//   res.send("<h1>hi</h1>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>hi</h1>");
// });

// // this => /pageName called route handling
// app.get("/login", (req, res) => {
//   res.send(
//     "<h1>Login Form</h1>\
//     <form>\
// <label>email: </label class='label-input'><input class='form-control' type='email' placeholder='email'><br> \
// <label>Password: </label><input class='form-control' type='password' placeholder='password'> \
//     </form>"
//   );
// });

app.listen(port, () => {
  console.log("server");
});
