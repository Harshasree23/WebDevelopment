let express = require('express');
let users = require('./MOCK_DATA.json');
let fs = require('fs');

const app = express();
const port = 3000;

app.use( express.urlencoded({ extended:false }) );

app.get('/users', (req,res) => {
    const html = `
  <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
`;

    res.send(html);
} );


app.get('/api/users', (req,res) =>{
    res.json(users);
} );


app.get('/users/:id',(req,res) =>{
    
    let id = Number(req.params.id);
    res.send(`<ul><li>${users.find( (user) => user.id === id ).first_name}<li><ul>`);

});


app.get('/api/users/:id',(req,res) =>{
    
    let id = Number(req.params.id);
    res.json(users.find( (user) => user.id === id ));

});


app.post( '/api/users' , (req,res) => {
    console.log( req.body );
    users.push( { ...req.body , id:users.length+1 }  );
    fs.writeFile( "./MOCK_DATA.json", JSON.stringify(users) ,
    (err,data) => {
        return res.json({success : "added user"});
    } );
} );


app.listen(port, console.log("server started") );