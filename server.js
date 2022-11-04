const express = require('express');
const app = express();
require("dotenv").config();

app.get('/api', (req,res)=>{
    res.json({
        success:1
    });
});


app.listen(process.env.APP_PORT || 4000,()=>{
    console.log("server up and running on ", process.env.APP_PORT);
})