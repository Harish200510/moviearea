export const MovieIndex=(req,res)=>{
   res.send("List of Movies")
}

export const MovieCreate=(req,res)=>{
     //id,title,description
     console.log(req.body);

     
     return res.json(req.body)

}
export const MovieUpdate=(req,res)=>{
    res.send("Movie Updated Successfully!")
}

export const MovieDelete=(req,res)=>{
    res.send("Movie Deleted Successfully!")
}
