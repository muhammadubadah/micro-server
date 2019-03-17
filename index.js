//console.log("Hello world!");
//console.log("print")
//import { a } from "./linkindex";
//a();
//common js module
//var a = require("./linkindex")
//a()
import http from "http";
http.createServer((req,res,nxt)=>{
    if(req.url == "/"){
        res.end("complete")
    }
}).listen(3000);