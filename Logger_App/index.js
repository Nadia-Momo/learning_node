console.log(process.argv);
const inputArguments=process.argv.slice(2);
console.log(inputArguments);
const text=inputArguments.join(" ").concat("\n");
const TimeStamp=new Date().toISOString();
const message=`${text} ${TimeStamp} \n`;
const path=require("path");
const fs=require("fs");

console.log(TimeStamp);
if(!message){
    console.log("❤️❤️ please provide a message to logo");
    console.log("Example: node index.js Hello World!!!");
process.exit(1);
}

console.log(text);

const filePath=path.join(__dirname,"log.txt");
fs.appendFile(filePath,message,{encoding:"utf-8"},()=>{
    console.log("Your log added sucessfully");
});
console.log(filePath);
