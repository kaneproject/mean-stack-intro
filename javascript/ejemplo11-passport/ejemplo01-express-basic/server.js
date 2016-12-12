var express     = require('express');
var passport    = require('passport');
var Strategy    = require('passport-http').BasicStrategy;
var app = express();
passport.use(new Strategy((username,password,done)=>{
    console.log("username : " + username + " pass: " + password);
    // Aqui dentro evalue si el usuario existe!
    if(username == "luis" && password == "luis"){
        done(null,true);
    }else{
        done(null,false);
    }
}));

app.get("/home",passport.authenticate('basic',{session:false}),(request,response)=>{
    console.log("Acceso permitido");
    response.send("Acceso concedido");
})

app.listen(8080);