import Movie from "../models/movie.model.js";

export const MovieIndex=async(req,res)=>{

    try{
       const movies=await Movie.find()
       res.json(movies)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
    
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

export const MovieDetail=async(req,res)=>{
    try{
         const movie=await Movie.findById(req.params.id)
         if(movie==null){
            return res.status(404).json({message:"Movie not found!"})
         }
         else{
            res.json(movie)
         }
     }
     catch(error){
        return res.status(500).json({message:error.message})

     }

}

export const MovieUpdate=async(req,res)=>{

     try{
        const updateMovie=await Movie.findOneAndUpdate(
            {_id:req.params.id},
            {
                title:req.body.title,
                desc:req.body.desc
            },
            {
                new:true //This will return the updated document
            })
          res.status(200).json(updateMovie)
     }
     catch(error){
        return res.status(500).json({message:error.message})
     }


    
    
}

export const MovieDelete=(req,res)=>{
    res.send("Movie Deleted Successfully!")
}
