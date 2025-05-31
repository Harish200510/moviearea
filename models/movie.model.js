import { Schema,model} from "mongoose";



const schema=new Schema({
    title:String,
    desc:String
})

const Movie=model("Movie",schema);

export default Movie;
// This code defines a Mongoose schema and model for a Movie entity.