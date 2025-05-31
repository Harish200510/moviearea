import express from "express"
import movieRoutes from "./routes/movies.route.js";
import connectDB from "./lib/db.js";

const app=express();
const PORT=6969;


//Data understanding Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//Database connection
connectDB();

app.get("/",(req,res)=>{
    res.json({msg:"Hello World!"})
})

//CRUD fucntionality of movies

app.use('/movies',movieRoutes);



app.listen(PORT,()=>{console.log(`Server is running at http://localhost:${PORT}`)})
