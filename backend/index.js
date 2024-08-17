const express = require('express')
const main=require('./db');

const app = express()
app.use(express.json());
const port = 8000
//to handle cors policy
app.use((req,resp,next)=>{
resp.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
resp.header(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-With,Content-Type,Accept"
);
next();
})

app.use("/api",require("./Routes/CreateUser"));
app.use("/api",require("./Routes/DisplayData"));
app.use("/api",require("./Routes/OrderDetails"));
app.get('/', async(req, res) => {
res.send("dkk")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

