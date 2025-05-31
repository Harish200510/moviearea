import Movie from "../models/movie.model.js";

export const MovieIndex=(req,res)=>{
   res.send("List of Movies")
}

export const MovieCreate=async(req,res)=>{
     //id,title,description
    

     //Validate your data
     const newMovie=new Movie({
        title:req.body.title,
        desc:req.body.desc
     })

     //It is an network operation so it will take some time to that's why we use async-await if you want to use await use async function
     try{
        const movie=await newMovie.save();
         return res.status(201).json(movie)
     }
     catch(error){
        return res.status(404).json({message:error.message})
     }

}

export const MovieUpdate=(req,res)=>{
    res.send("Movie Updated Successfully!")
}

export const MovieDelete=(req,res)=>{
    res.send("Movie Deleted Successfully!")
}
