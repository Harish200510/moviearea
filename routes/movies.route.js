import express from 'express';

const router = express.Router();

//R- For Reading
router.get('/',(req,res)=>{
   res.send("List of Movies")
})

//C- For Creating
router.post('/',(req,res)=>{
    res.send("Movie Created Successfully!")

})

//U- For Updating
router.put('/:id',(req,res)=>{
    res.send("Movie Updated Successfully!")

})

//D- For Deleting
router.delete('/:id',(req,res)=>{
    res.send("Movie Deleted Successfully!")

})

export default router;
