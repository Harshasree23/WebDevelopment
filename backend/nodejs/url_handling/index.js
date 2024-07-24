let url = require('url');
let http = require('http');
let fs = require('fs');


let myServer = http.createServer( (req,res) => {
    let parsed = url.parse(req.url,true);
    
    // to stop the extra request for favicon in the log
    if(parsed.pathname === "/favicon.ico")
    {
        res.end();
        return;
    }

    fs.appendFile('log.txt', ` Date: ${Date.now()} - Request: ${req.method} - Path: ${parsed.pathname}\n`, (err) => {
        if (err) {
          console.error('Error writing log:', err);
        }
      });
    
      switch(parsed.pathname)
    {
        case "/": res.end("Home page"); break;
        case "/about": res.end("I am harsha"); break;
        case "/contacts": res.end("Contact me bye bye"); break;
        default: res.end("Error");
    }
} );

myServer.listen(3000, () => {
    console.log('Server started');
})