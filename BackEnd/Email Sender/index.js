import dotenv from "dotenv";
import nodemailer from "nodemailer";
import inquirer from "inquirer";

dotenv.config();

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // This line fixes the cert issue
  },
});

inquirer
  .prompt([
    {
      message: "Recipient's email address",
      name: "email",
    },
  ])
  .then((answer) => {
    const email = answer.email;
    if (email.trim() !== "" && email.includes("@gmail.com")) {
      inquirer
        .prompt([
          {
            message: "write the subject: ",
            name: "subject",
          },
        ])
        .then((answer) => {
          const subject = answer.subject;
          if (subject.trim() !== "") {
            inquirer
              .prompt([
                {
                  message: "write the body of email: ",
                  name: "body",
                },
              ])
              .then((answer) => {
                const body = answer.body;
                const mailOptions = {
                  from: process.env.EMAIL_USER,
                  to: email,
                  subject: subject,
                  text: body,
                };
                transport
                  .sendMail(mailOptions)
                  .then(() =>
                    console.log(`✅ Email sent successfully to ${email}`)
                  )
                  .catch((err) =>
                    console.error("❌ Failed to send email:", err)
                  );
              })
              .catch((err) => {
                console.log(err + " ----- 1");
              });
          }
        })
        .catch((err) => {
          console.log(err + " ----- 2");
        });
    }
  })
  .catch((err) => {
    console.log(err + " ----- 3");
  });
