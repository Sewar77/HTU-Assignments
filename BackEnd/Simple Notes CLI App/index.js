/*
Simple Notes CLI App

Goal:
Let the user enter a title and content for a note. Save each note in a JSON file.
Ask if the user wants to add another one.

Skills Practiced:

inquirer for title and content

Use fs to read/write JSON

Learn how to append without erasing data
*/

import inquirer from "inquirer";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter the Title of note: ",
      name: "title",
    },
  ])
  .then((answer) => {
    const title = answer.title;
    fs.writeFileSync("./UserNotes.txt", "Title: " + title);

    inquirer
      .prompt([
        {
          message:
            "Want to add description? If yes, write it down. If no, press N.",
          name: "descripe",
        },
      ])
      .then((answer) => {
        const descripe = answer.descripe;
        if (descripe === "N" || descripe === "n") {
          console.log("Done.");
        } else {
          const newNote = {
            title: title,
            description: descripe, // Fixed spelling
          };
          let notes = [];
          if (fs.existsSync("./UserNotes.json")) {
            const data = fs.readFileSync("./UserNotes.json", "utf8");
            notes = JSON.parse(data);
          }
          notes.push(newNote);
          fs.writeFileSync("./UserNotes.json", JSON.stringify(notes, null, 2));
          fs.appendFileSync("./UserNotes.txt", "\nDescription: " + descripe);
          console.log("Done");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
