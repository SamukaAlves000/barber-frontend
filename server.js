const express = require('express');

const app = express();

const PORT = process.env.PORT || 9000;

app.use(express.static(__dirname + '/dist/barber'));
console.log(__dirname + 'dist/barber');
app.get('/*',(req,res)=>{
  res.sendFile(__dirname+'/dist/barber/index.html');
  console.log(__dirname+'/dist/barber/index.html')
});

app.listen(PORT,()=>{
      console.log("Servidor iniciado na porta:" + PORT);
});



