import inquirer from "inquirer";
import fs from "fs";
import play from "play-sound";
const player = play();
class playSound {
  constructor() {
    this.sound = [];
  }
  Song() {
    console.log("🎵 Welcome to CLI Music Player 🎵");
    console.log("📂 Loading songs from /music...");
    const file = fs
      .readdirSync("./music", "utf8")
      .filter((song) => song.endsWith(".mp3"));
    file.forEach((file, index) => {
      console.log(`${index + 1}. ${file}`);
    });
    inquirer
      .prompt([
        {
          message: "Pick the number of song you want: ",
          name: "songNumber",
        },
      ])
      .then((answer) => {
        const songNumber = parseInt(answer.songNumber);
        const index = songNumber - 1;
        if (index >= 0 && index < file.length) {
          const songPath = `./music/${file[index]}`;
          player.play(songPath);
          console.log("Quraan is played now. ");
        } else {
          console.log("No Music in there. ");
        }
      });
  }
}
let song = new playSound();
song.Song();
