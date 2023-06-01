const express =require("express");
const connection=require("./config/db");

const app =express();
require('dotenv').config();
app.use(express.json());

// const order=require("./cantroller/oder")
 //const user=require("./cantroller/user")
// const restaurant=require("./routes/user.routes")



 //app.use('/api',user) 
//app.use('/api',restaurant)
// app.use('/api',order)

app.use((res,req)=>{
    req.url=("/")
    res.setEncoding("welcom to FOOD APP")
})

app.listen(process.env.PORT,()=>{
try {
    connection;
    console.log("conected to DB ")
} catch (error) {
    console.log(error)
}
console.log(`server is runig on port ${process.env.PORT}`)
})
