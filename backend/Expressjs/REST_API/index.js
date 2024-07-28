let express = require('express')

app = express();

app.get('/', (req,res) => {
    res.end("<br><h1>Hello</h1>");
} );

app.listen(3000, console.log("server started") );