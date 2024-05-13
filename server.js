const http = require("http")
const fs = require('fs')
 
const port = 4000; 

let home = fs.readFileSync("./index.html","utf-8")
let contact = fs.readFileSync("./contact.html","utf-8")
let about = fs.readFileSync("./about.html","utf-8")
let server = http.createServer((req, res)=>{
    if(req.url =='/'){
     return   res.end(home)
    }
    if(req.url =='/contact'){
        return   res.end(contact)
       }
       if(req.url =='/about'){
        return   res.end(about)
       }
       else{
        return res.end("404 error page not found")
       }
    
   
})
server.listen(port,()=>{
    console.log(`server is started`)

})