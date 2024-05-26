const express = require("express");
const cors =require('cors')
var user=require('./Models/user')
const dotenv = require("dotenv").config(); // Fixed the typo
const port = process.env.PORT || 3000; // Added a default port value

const connectBD = require("./Config/db")

const app = express();
app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extends: false}));

connectBD();


app.post("/register",(req,res)=>
    {
        user.create(req.body).then(()=>
        {
            res.send("user register")
        })
    })
    app.post("/login", (req, res) => 
    {
        var email = req.body.email;
    
        if (email) 
                {
            user.findOne({ email: email }).then((resp) => {
                if (resp) 
                    {
                    if (req.body.password === resp.password) {
                        res.send(resp); 
                    } else {
                        res.send("Incorrect password"); 
                    }
                } else {
                    res.send("User not found"); 
                }
            })
                }
             else {
            res.send("Email is required");
        }
      })
    



app.use("/api/tasks", require("./Routes/taskRoutes"));


app.listen(port, () => console.log(`Server is running on port: ${port}`));


