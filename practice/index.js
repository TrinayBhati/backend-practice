const os = require("node:os");
const fs = require("node:fs");
const fileName = "simple.txt";
const events = require("node:events");
const http = require("node:http");
const functions = require("./module.js");

// console.log(os); // shows complete object

// console.log(os.arch()); // to check operating system of the system

// console.log("A",os.EOL,"B"); // end of line

// console.log(os.cpus()); // information of processoe cpus

// console.log(os.cpus().length);

// const cpus = os.cpus()
// for(let i = 0; i<cpus.length-1 ; i++){
//     const core = cpus[i];
// console.log("Speed of Code", i+1, "=" , core.speed)
// }

// console.log(os.freemem()); // free memory in ram

// console.log(os.homedir()); // shows home directory

// console.log(os.hostname()); // host name

// console.log(os.networkInterfaces()); //wifi or network details

// console.log(os.platform()); // windows iso or linux

// console.log(os.release());

// console.log(os.tmpdir());

// console.log(os.type()); // os

// console.log(os.uptime()/3600); // time since pc is on

// console.log(os.userInfo());

// console.log(os.constants); // gives all numbers consts

const writeFile = () => {
  fs.writeFile("sample.txt", "file created by fs module", (error) => {
    console.log(error);
  }); // to create file first then it'll update
};
// writeFile();

// fs.appendFile("sample.txt",  `${os.EOL} update it ` ,(error)=>{
//     console.log(error);
// }) // to update, it'll continue in from the end

// fs.writeFile("Logs.txt", "creating Logs", (error)=>{
//     if(error){
//         console.log(error);
//     }
// });

// const msg = os.EOL+ new Date().toISOString() + " \n User Logged Out \n";
// fs.appendFile("Logs.txt" , msg , ()=>{})

const updateFile = () => {
  const msg = new Date().toISOString() + "User Login Activity\n"; //also can use toLocalString() instead of toISOString()
  //Asynchronus way we prefer this
  fs.appendFile("simple.txt", msg, (error) => {
    if (error) {
      console.log(error);
    }
  });
};
// updateFile();
//synchronus way but we don't prefer it
// fs.appendFile("Sample.txt", msg);

const readFile = () => {
  fs.readFile(fileName, (error, data) => {
    if (error) {
      console.log("ERROR_WHILE_READING", error);
      return;
    }
    console.log("FILE_CONTENT", data.toString());
  });
};
// readFile();

const deleteFile = () => {
  fs.unlink(fileName, (error) => {
    if (error) {
      console.log("error occured", error);
      return;
    }
    console.log("FILE", fileName, "DELETED SUCCESSFULLY");
  });
};
// deleteFile(); // deletes file

const folderExists = () => {
  const exists = fs.existsSync("logs");
  console.log(exists);
};
// folderExists();

const createFolder = () => {
  fs.mkdir("logs", () => {
    console.log("FOLDER CREATED SUCCESSFULLY");
  });
};
// createFolder(); // creates folder -> mkdir()

// const myEmitter = new events.EventEmitter();
// myEmitter.on("MY_EVENT", (e) => {
//   // listen to an event
//   console.log("My Event is working", e);
// });
// myEmitter.emit("MY_EVENT"); // emit an event
// setInterval(() => { // running interval every 5 seconds
//   myEmitter.emit("MY_EVENT"); // emit an event
// }, 5000);

const SIGNAL_CHANGE = "SIGNALCHANGE";
const myEmitter = new events.EventEmitter();
myEmitter.on(SIGNAL_CHANGE, (e) => {
  // listen to an event
  const msg = new Date().toLocaleString() + " SIGNAL CHANGED TO " + e + os.EOL;
  fs.appendFile("signal.log", msg, (error) => {
    if (error) {
      console.log("ERROS IS", error);
      return;
    }
  });
  console.log("My Event is working", e);
});
const signalColors = ["GREEN", "YELLOW", "RED"];
let counter = 0;
// setInterval(() => {
//   const index = counter % 3;
//   counter++;
//   // console.log(signalColors[index]);
//   myEmitter.emit(SIGNAL_CHANGE, signalColors[index]);
// }, 5000);

// http
//   .createServer(() => {
//     console.log("server started", os.cpus()[0].model);
//   })
//   .listen(8080, () => {
//     console.log("Server running on 8080");
//   });

// // better way below using functions
// const server = () => {
//   console.log("server started", os.cpus()[0].model);
// };
// const onStart = () => {
//   console.log("Server running on 8080");
// };
// http.createServer(server).listen(8080, onStart);

// const server = (req, res) => {
//   console.log("URL", req.url); // check req.headers,
//   if (req.url == "/todo") {
//     res.write(`Request Recieved on ${req.url}`);
//   } else if (req.url == "/post") {
//     res.write(`Request Recieved on ${req.url}`);
//   } else {
//     res.write(`error 404, requested route ${req.url} not found `);
//   }
//   res.end(); // server sends response back to the client
// };
// const onStart = () => {
//   console.log("Server running on 8080");
// };
// http.createServer(server).listen(8080, onStart);

// const server = (req, res) => {
//   console.log("URL", req.url); // check req.headers,
//   console.log("URL", req.method);
//   if (req.url == "/todo") {
//     if (req.method == "GET") {
//       res.write(`This is a GET request`);
//     } else {
//       res.write(`This is a POST request`);
//     }
//   } else if (req.url == "/post") {
//     res.write(`Request Recieved on ${req.url}`);
//   } else {
//     res.write(`error 404, requested route ${req.url} not found `);
//   }
//   res.end(); // server sends response back to the client
// };
// const onStart = () => {
//   console.log("Server running on 8080");
// };
// http.createServer(server).listen(8080, onStart);

// const todos = [
//   { id: 1, title: "lorm ipsum", completed: true },
//   { id: 2, title: "lorem isum", completed: false },
//   { id: 3, title: "lorem ipum", completed: true },
//   { id: 4, title: "lorem ipum", completed: true },
//   { id: 5, title: "lorem psum", completed: false },
//   { id: 6, title: "lorem ipum", completed: true },
// ];
// const todoString = JSON.stringify(todos);
// const server = (req, res) => {
//   console.log("URL", req.url); // check req.headers,
//   console.log("URL", req.method);
//   if (req.url == "/todo") {
//     if (req.method == "GET") {
//       res.end(todoString);
//     } else {
//       res.write(`This is a POST request`);
//     }
//   } else if (req.url == "/post") {
//     res.write(`Request Recieved on ${req.url}`);
//   } else {
//     res.write(`error 404, requested route ${req.url} not found `);
//   }
//   res.end(); // server sends response back to the client
// };
// const onStart = () => {
//   console.log("Server running on 8080");
// };
// http.createServer(server).listen(8080, onStart);

const sum = functions.add(3, 7);
console.log(sum);
