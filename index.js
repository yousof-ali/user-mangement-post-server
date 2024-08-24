const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const users = [
    {id:1, name:"yousof ali", email:"yous@gmail.com"},
    {id:2, name:"karim ali", email:"karim@gmail.com"},
    {id:3, name:"rahim ali", email:"rahim@gmail.com"}
]

app.get("/",(req,res) => {
    res.send(`users Management server is running on port ${port}`)
})

app.get("/users", (req,res) => {
    res.send(users);
})

app.post("/users", (req,res) => {
    console.log(req.body);
    const newuser = req.body;
    users.push(newuser);
    res.send(newuser);
})

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})