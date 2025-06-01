const EventEmitter = require("events");

class schoolBell extends EventEmitter {}
const schoolBell1 = new schoolBell();
schoolBell1.on('ring', () => {
  console.log("Yahoo class sesh!");
});
schoolBell1.on('broken',()=>{
    console.log("Oh no class ki sesh hobe na");
});

schoolBell1.emit("ring");
schoolBell1.emit("broken");