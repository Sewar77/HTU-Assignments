import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import fs from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

let userNote = {
  title: null,
  description: null,
};
let notes = [];

app.use(bodyParser.urlencoded({ extended: true }));

function addNote(req, res, next) {
  console.log(req.body);
  if (req.body) {
    (userNote.title = req.body["title"]),
      (userNote.description = req.body["description"]);
      notes.push(userNote);
  }
  next();
}
app.use(addNote);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
//  req.send()
});


app.post("/show", (req, res)=>{
  const { title, description }=  fs.readFileSync("./noteSaver.json", "utf8");
  req.send(title, description)
})

app.post("/submit", (req, res) => {
  const { title, description } = req.body;
  let savedNotes = []
  if (title && title.trim() !== "") {
    const userNote = { title, description };

    savedNotes = fs.writeFileSync("./notesSaver.json", JSON.stringify(userNote, null, 2));

    res.send(
      `<p>Your task is: <br>${title} <br> ${description}</p>`
    );
  } else {
    res.send("<p>Oops! Title cannot be empty.</p>");
  }
});


app.listen(port, () => {
  console.log("Server");
});
