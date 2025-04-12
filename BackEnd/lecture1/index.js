// console.log("Sewar Shorman"); 
// console.log("new line"); 





const fs = require('fs');

fs.writeFile("message.txt", "hello" , (err) =>{
    if (err) throw err;
    console.log("saved");

})



// console.log("new line"); 

fs.readFile("./message.txt", "utf8", (err, data)=>{
    if (err) throw err;
    console.log(data.toUpperCase())
    console.log(data.charAt(9))
})