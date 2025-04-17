import inquirer from "inquirer";
import fs, { existsSync } from "fs";

class Note {
  constructor() {
    this.notes = [];
  }

  addNote() {
    inquirer
      .prompt([
        {
          message: "Add title: ",
          name: "title",
        },
      ])
      .then((answer) => {
        const title = answer.title;
        if (title.trim() === "") {
          console.log("Cant accept empty title. ReInput. ");
          return this.addNote();
        } else {
          if (existsSync("./Notes.json")) {
            console.log("Saved");
          }
          console.log("Note Created.");
          inquirer
            .prompt([
              {
                message:
                  "Do you want to add description? if yes write it, if no press n. ",
                name: "description",
              },
            ])
            .then((answer) => {
              let description = answer.description;
              description = description.toLowerCase();

              if (description.trim() === "") {
                console.log("Note saved without description. ");
                description = null;
                this.noteApp();
              }
              const newNote = { title, description };

              let data = [];
              if (fs.existsSync("./Notes.json")) {
                try {
                  const file = fs.readFileSync("./Notes.json", "utf8");
                  data = JSON.parse(file);
                } catch (err) {
                  console.log(
                    "⚠️ Couldn't read existing notes. Starting fresh..."
                  );
                  data = [];
                }
              }

              data.push(newNote);

              fs.writeFileSync("./Notes.json", JSON.stringify(data, null, 2));
              console.log("✅ Note saved successfully!");

              this.noteApp();
            });
        }
      });
  }

  viewNotes() {
    try {
      if (fs.existsSync("./Notes.json")) {
        const notes = fs.readFileSync("./Notes.json", "utf8");
        const veiw = JSON.parse(notes).map(
          (note, index) =>
            "\nNote " +
            (index + 1) +
            ":\nTitle: " +
            note.title +
            "  \nDescription: " +
            note.description
        );
        console.log(veiw.join("\n"));
        this.noteApp();
      } else {
        console.log("No notes to view yet.");
        this.noteApp();
      }
    } catch (err) {
      console.log("There is no notes yet. ");
      this.noteApp();
    }
  }

  deleteNote() {
    if (fs.existsSync("./Notes.json")) {
      const notes = fs.readFileSync("./Notes.json", "utf8");
      const veiw = JSON.parse(notes).map(
        (note, index) =>
          "\nNote " +
          (index + 1) +
          ":\nTitle: " +
          note.title +
          "  \nDescription: " +
          note.description
      );
      console.log(veiw.join("\n"));
    }
    inquirer
      .prompt([
        {
          message: "Enter the number of note to delete: ",
          name: "deletedNote",
        },
      ])
      .then((answer) => {
        const notes = fs.readFileSync("./Notes.json", "utf8");
        const deleted = JSON.parse(notes);
        const indexToDelete = parseInt(answer.deletedNote) - 1;
        if (indexToDelete >= 0 && indexToDelete < deleted.length) {
          deleted.splice(indexToDelete, 1);
        } else {
          console.log("Invalid note number.");
          this.noteApp();
          return;
        }
        fs.writeFileSync("./Notes.json", JSON.stringify(deleted, null, 2));
        console.log("Note deleted successfully!");
        this.noteApp();
      });
  }

  editNote() {
    if (fs.existsSync("./Notes.json")) {
      const notes = fs.readFileSync("./Notes.json", "utf8");
      const veiw = JSON.parse(notes).map(
        (note, index) =>
          "\nNote " +
          (index + 1) +
          ":\nTitle: " +
          note.title +
          "  \nDescription: " +
          note.description
      );
      console.log(veiw.join("\n"));
    }
    inquirer
      .prompt([
        {
          message: "Enter the number of note to edit: ",
          name: "editNote",
        },
      ])
      .then((answer) => {
        const notes = fs.readFileSync("./Notes.json", "utf8");
        const edited = JSON.parse(notes);
        const indexToEdit = parseInt(answer.editNote) - 1;
        if (indexToEdit >= 0 && indexToEdit < edited.length) {
          inquirer
            .prompt([
              {
                message: "Enter the new title: ",
                name: "title",
              },
              {
                message: "Enter the new description: ",
                name: "description",
              },
            ])
            .then((answer) => {
              edited[indexToEdit].title = answer.title;
              edited[indexToEdit].description = answer.description;

              fs.writeFileSync("./Notes.json", JSON.stringify(edited, null, 2));
              console.log("Note Updated.");
            });
        } else {
          console.log("❌ Invalid note number.");
          this.noteApp();
        }
        this.noteApp();
      });
  }

  noteApp() {
    inquirer
      .prompt([
        {
          message:
            "Welcome in NotesApp, Please Choose the operation You want:\n\
A for Add New Note,\n \
V for View the Notes,\n \
D for Delete Note, \n\
E for Edit Note,   \n \
O for Exit App.     \n ",
          name: "note",
        },
      ])
      .then((answer) => {
        let noteOperation = answer.note;
        noteOperation = noteOperation.toUpperCase();
        switch (noteOperation) {
          case "A":
            this.addNote();
            break;
          case "V":
            this.viewNotes();
            break;
          case "D":
            this.deleteNote();
            break;
          case "E":
            this.editNote();
            break;
          case "O":
            process.exit();
          default:
            console.log("Seems Wrong Input, Please reinput again.");
            this.noteApp();
        }
      });
  }
}

let app = new Note();
app.noteApp();
