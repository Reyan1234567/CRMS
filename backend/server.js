const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require("./db");
const Vehicle=require('Vehicle')


app.get("/", (req, res) => res.send(`Hello world at ${port}`));
app.get('/api/Vehicle', async(req, res)=>{
    try{
        const List=await Vehicle.find()
        res.json(List)
    }
    catch(err){
        res.status(500).send({err:"failed to fetch data"})
    }
})
app.listen(port, () => console.log("world hello"));
