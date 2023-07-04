const os = require("node:os");
const fs = require("node:fs");

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

// fs.writeFile("sample.txt", "file created by fs module", (error)=>{
//     console.log(error)
// }) // to create file first then it'll update

// fs.appendFile("sample.txt",  `${os.EOL} update it baby` ,(error)=>{
//     console.log(error);
// }) // to update, it'll continue in from the end

fs.writeFile("Logs.txt", "creating Logs", (error)=>{
    if(error){
        console.log(error);
    }
});

const msg = os.EOL+ new Date().toISOString() + " \n User Logged Out \n";
fs.appendFile("Logs.txt" , msg , ()=>{})