import express from 'express'
 
const app=express();
const port=3000
app.get("/",(req,res)=>{
    res.send("<h2>hello friends</h2>  This is my simple web server which gives you some information about me<br> please check <a href='https://intern-web-server-i8hz.vercel.app/name'>/name,</a><a href='https://intern-web-server-i8hz.vercel.app/hobby'>/hobby,</a>and<a href='https://intern-web-server-i8hz.vercel.app/dream'>/dream </a> routes to know about me")
})

app.get("/name",(req,res)=>{
    res.send("Solomon Timiso Feleke")
})
app.get("/hobby",(req,res)=>{
    res.json([{
        hobby1:"I love studying Holy Bible and some kinds of psychological books",
       
        
    },
    {
         hobby2:"Listening Gospel songs"
    }])
})

app.get("/dream",(req,res)=>{
    res.send("I have a dream to open my own startup that solves my country main problems.<br> <b>Hardship moulds the ideal man!!</b>");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
