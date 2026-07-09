const express = require('express');
const path = require('path');

const app = express();

app.use('/firmware',
        express.static(path.join(__dirname,'firmware')));

app.get('/',(req,res)=>{

    res.send("Servidor OTA funcionando");

});

const PORT=process.env.PORT || 10000;

app.listen(PORT,()=>{

    console.log("Servidor iniciado.");

});