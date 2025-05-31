import { Schema,model} from "mongoose";



const schema=new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true
    }
})

const Movie=model("Movie",schema);

export default Movie;
// This code defines a Mongoose schema and model for a Movie entity.