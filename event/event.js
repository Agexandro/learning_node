const events = require("events");
const eventEmmiter = new events.EventEmitter();

const myEvent = ()=>{
    console.log("My house is on fire!");
}

eventEmmiter.on("fire", myEvent);

eventEmmiter.emit("fire");