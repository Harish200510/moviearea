import express from "express"
import movieRoutes from "./routes/movies.route.js";

const app=express();
const PORT=6969;

app.get("/",(req,res)=>{
    res.json({msg:"Hello World!"})
})

//CRUD fucntionality of movies

app.use('/movies',movieRoutes);



app.listen(PORT,()=>{console.log(`Server is running at http://localhost:${PORT}`)})
