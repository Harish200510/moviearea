import express from "express"

const app=express();
const PORT=6969;

app.get("/",(req,res)=>{
    res.json({msg:"Hello World!"})
})

//CRUD fucntionality of movies

//R- For Reading
app.get('/movies',()=>{

})

//C- For Creating
app.post('/movies',()=>{

})

//U- For Updating
app.put('/movies/:id',()=>{

})

//D- For Deleting
app.delete('movies/:id',()=>{

})



app.listen(PORT,()=>{console.log(`Server is running at http://localhost:${PORT}`)})
