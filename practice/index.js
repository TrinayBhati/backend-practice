const os = require("node:os");
const fs = require("node:fs");
const fileName = "simple.txt";
const events = require("node:events");
const http = require("node:http");
const functions = require("./module.js");
const express = require("express");
require("dotenv").config();
console.log(process.env.SECRET_NUMBER);

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

// const writeFile = () => {
//   fs.writeFile("sample.txt", "file created by fs module", (error) => {
//     console.log(error);
//   }); // to create file first then it'll update
// };
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

// const updateFile = () => {
//   const msg = new Date().toISOString() + "User Login Activity\n"; //also can use toLocalString() instead of toISOString()
//   //Asynchronus way we prefer this
//   fs.appendFile("simple.txt", msg, (error) => {
//     if (error) {
//       console.log(error);
//     }
//   });
// };
// updateFile();
//synchronus way but we don't prefer it
// fs.appendFile("Sample.txt", msg);

// const readFile = () => {
//   fs.readFile(fileName, (error, data) => {
//     if (error) {
//       console.log("ERROR_WHILE_READING", error);
//       return;
//     }
//     console.log("FILE_CONTENT", data.toString());
//   });
// };
// readFile();

// const deleteFile = () => {
//   fs.unlink(fileName, (error) => {
//     if (error) {
//       console.log("error occured", error);
//       return;
//     }
//     console.log("FILE", fileName, "DELETED SUCCESSFULLY");
//   });
// };
// deleteFile(); // deletes file

// const folderExists = () => {
//   const exists = fs.existsSync("logs");
//   console.log(exists);
// };
// // folderExists();

// const createFolder = () => {
//   fs.mkdir("logs", () => {
//     console.log("FOLDER CREATED SUCCESSFULLY");
//   });
// };
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

// const SIGNAL_CHANGE = "SIGNALCHANGE";
// const myEmitter = new events.EventEmitter();
// myEmitter.on(SIGNAL_CHANGE, (e) => {
//   // listen to an event
//   const msg = new Date().toLocaleString() + " SIGNAL CHANGED TO " + e + os.EOL;
//   fs.appendFile("signal.log", msg, (error) => {
//     if (error) {
//       console.log("ERROS IS", error);
//       return;
//     }
//   });
//   console.log("My Event is working", e);
// });
// const signalColors = ["GREEN", "YELLOW", "RED"];
// let counter = 0;
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

// const sum = functions.add(3, 7);
// console.log(sum);

// const myServer = http.createServer();
// myServer.on("request", server);
// myServer.listen(8080, onStart);

const app = express();
app.use(express.json()); // app.use() is middleware pasing express.json through it, so everything that passes through the middleware converts to json
// express.json is a way to access body
// app.use((req, res, next) => { // works on application level
//   console.log("kaboom");
//   if (req.body.token == 1) {
//     next();
//   } else {
//     res.status(401).json({
//       message: "Access Denied",
//     });
//   }
//   // next(); // if this next is commented then shit won't go any further
// });

const myAuth = (req, res, next) => {
  // can work on api level
  console.log("kaboom");
  console.log(req.url);
  console.log(req.query);
  // if (req.body.token == 1) {
  //   // if(req.query.anytihng == "smthn")
  //   next();
  // } else {
  //   res.status(401).json({
  //     message: "Access Denied",
  //   });
  // }
  next();
  // next(); // if this next is commented then shit won't go any further
};
app.use(myAuth); // again works on application level
app.use(express.static("files")); // now can access any file in files folder with url http://localhost:8080/sample2.txt

app.get("/", function (req, res) {
  res.send("The express server is running");
});
app.get("/user/:userId", (req, res) => {
  console.log(req.params.userId);
  const user = {
    id: 1,
    name: "suresh",
    age: 33,
  };
  res.json(user);
});
app.get("/todos", (req, res) => {
  const todo = {
    id: 2,
    text: "lorem Ipsum",
    description: "loremIpsum vfgd jfjs ",
  };
  res.json(todo);
});
app.post("/users", (req, res) => {
  //"/create-user"
  const responseJson = {
    success: true,
    message: "user created successfully",
  };
  res.json(responseJson);
});
app.put("/users", (req, res) => {
  // "replace-user"
  const putResponse = {
    success: true,
    message: "user replaced successfully",
  };
  res.json(putResponse);
});
app.delete("/users", (req, res) => {
  const deleteResponse = {
    success: true,
    message: " deleted successfully",
  };
  res.json(deleteResponse);
});
// users question
app.get("/users/:userId", (req, res) => {
  const user = {
    user: req.params.userId,
  };
  res.json(user);
});
// products question
const products = [
  { id: 1, name: "Product 1", quantity: 224 },
  { id: 2, name: "Product 2", quantity: 534 },
  { id: 3, name: "Product 3", quantity: 386 },
];
app.get("/product/:productId", (req, res) => {
  const productId = req.params.productId;
  const product = products.find((product) => product.id == productId);
  if (product) {
    res.json(product);
  } else {
    // res.send("Product not found");
    res.status(404).json({ message: "product not found" });
  }
});
// tours question
app.get("/tours", (req, res) => {
  fs.readfile(`${__dirname}/data/tours.json`, `utf8`, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
    const tours = JSON.parse;
    data;
    res.status(200).json(tours);
  });
});
// post request
app.post("/user", myAuth, (req, res) => {
  // myUth is applied on this api at this point
  console.log(req.body);
  console.log(req.headers);
  const responseJson = {
    message: "success",
  };
  res.json(responseJson);
});
// sample text read
app.get("/get-file", (req, res) => {
  fs.readFile("./files/sample.txt", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const fileData = data.toString();
      res.json({
        data: fileData,
      });
    }
  });
});
const port = 8080;
app.listen(port, () => {
  console.log("server is up n running", port);
});
// console.log(process);
// console.log(process.env); // environmental variables
process.env.author_name = "TRINAY";
// console.log(process.env);
// // set environmental variables like we did in java for senstive data then get it by env.get.

// const str = "my name is Trinay, age 22";
// console.log(encodeURIComponent(str)); // converts to url
// console.log(decodeURIComponent("my%20name%20is%20Trinay%2C%20age%2022"));

//design pattern

// mongo db ===========================================================

// use myDB
// switched to db myDB
// show collections
// student
// db.student.insertOne({ name: "Jack",

// mobileNo: "9876543211",

// email: "jack@email.com",

// address: "123, ABC Street",

// bloodGroup: "O-",

// rollNo : "13246"})
