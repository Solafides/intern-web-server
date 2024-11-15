import express from 'express'
 
const app=express();
const port=3000
app.get("/",(req,res)=>{
    res.send("<h2>hello friends</h2>  This is my simple web server which gives you some information about me<br> please check <a href='http://localhost:3000/name'>/name,</a><a href='http://localhost:3000/hobby'>/hobby,</a>and<a href='http://localhost:3000/dream'>/dream </a> routes to know about me")
})

app.get("/name",(req,res)=>{
    res.send("Solomon Timiso Feleke")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});