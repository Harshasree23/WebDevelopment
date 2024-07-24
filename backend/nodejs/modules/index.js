let math = require('./math');
let http = require('http');

let myServer = http.createServer( (req,res) =>
{
    res.end(` ${math.add(2,3)} , ${math.sub(2,3)} , ${math.mul(2,3)} , ${math.div(2,3)} `);
} );

myServer.listen(3000, () => console.log("Server started"));