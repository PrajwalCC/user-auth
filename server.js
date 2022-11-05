require("dotenv").config();
const express = require('express');
const sequelize = require("./utils/db");
const user = require("./model/user");
const validateAuthorization = require("./utils/validator");
const authRoutes = require("./routes/auth-routes");
const userRoutes = require("./routes/user-routes");
const app = express();
app.use(express.json())

app.get('/api', (req,res)=>{
    res.json({
        success:1
    });
});

app.use(authRoutes);
app.use("/user", validateAuthorization(), userRoutes);


sequelize.sync({alter: false}).then(()=> {
    app.listen(process.env.APP_PORT || 4000,()=>{
        console.log("server up and running on ", process.env.APP_PORT);
    })
})