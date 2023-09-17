const express = require('express')
const app = express()
const port = 4000
const mongoDB = require("./db")
mongoDB();
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  next();
})
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World! I am going create')
})
 
 app.use('/api', require("./Routes/CreateUser"));
 app.use('/api', require("./Routes/DisplayData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})