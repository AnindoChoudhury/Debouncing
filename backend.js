const express = require("express"); 
const cors = require("cors"); 
const app = express(); 
app.use(cors()); 
app.get("/sum",(req,res)=>{
    const a = req.query.a; 
    const b = req.query.b; 
    res.send((Number(a)+Number(b)).toString());
})
app.listen(3000,()=>{
    console.log("Server starts")
}); 

