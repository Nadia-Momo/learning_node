//1. syncronous way
//1.file read==> single thread|I/O intensive task==| eta single thread e hobe-->not go to thread pool
//2.asynchronous way
//file read ->single thread->event loop-->thread pool-->task completed
// const fs=require("fs");
// const { text } = require("stream/consumers");
// console.log("Task 1");
// const text="Learning file system";
// fs.writeFileSync("./hello.txt",text);
// console.log("Task 3")
// const data=fs.readFileSync("./hello.txt",{encoding:"utf-8"});
// console.log(data);
// 
// const fs=require("fs");
// console.log("task 1");
// let text="node js";
// fs.readFile("./hello.txt",{encoding:"utf-8"},(err,data)=>{
//   if(err){
//     console.log("something went wrong",err);
//     return;
//   }
//   text=data;
//   console.log(text,"inside callback");
// })
//  console.log(text);

const fs=require("fs");


// fs.readFile("./hello.txt",{encoding:"utf-8"},(err,data)=>{
//   if(err){
//     console.log("Something went wrong",err);
//     return;
//   }
//   fs.writeFile("./hello.txt",data,{encoding:"utf-8"},(err)=>{
// if(err){
//   console.log("Something went wrong",err);
//   return;
// }
// console.log("written suceesfully");
//   })
// })
const readStream=fs.createReadStream("./hello-world.txt",{encoding:"utf-8"})
const writeStream=fs.createWriteStream("./hello.txt",{encoding:"utf-8"})
readStream.on("data",(data)=>{
  console.log(data);
  writeStream.write(data,(err)=>{
    if(err){
      throw Error("Error",err)
    }
  })
})
readStream.on("error",(err)=>{
   if(err){
      throw Error("Error",err)
    }
})
writeStream.on("error",(err)=>{
  if(err){
    throw Error("Error",err);
  }
})