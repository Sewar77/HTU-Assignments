/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer"; // User interaction
import qr from "qr-image"; // QR code generation
import fs from "fs"; // File system access

// inquirer
//   .prompt([
//     {
//       message: "enter url",
//       name: "url",
//     },
//   ])
//   .then((answer) => {
//     const url = answer.url;
//     const qr_image = qr.image(url, { type: "png" });
//     qr_image.pipe(fs.createWriteStream("qr_code.png"));

//     fs.writeFile("URL.txt", url, (err) => {
//       if (err) throw err;
//       console.log("saved. ");
//     });
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });

inquirer
  .prompt([
    {
      message: "enter your text: ",
      name: "text",
    },
  ])
  .then((answer) => {
    const text = answer.text;
    fs.writeFile("./userInput.txt", text, (err) => {
      if (err) throw err;
      console.log("input saved. ");
    });
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
