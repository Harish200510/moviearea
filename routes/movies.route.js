import express from 'express';
import { MovieIndex,MovieCreate, MovieUpdate, MovieDelete,MovieDetail} from '../controllers/movie.controller.js';


const router = express.Router();

//R- For Reading
router.get('/',MovieIndex)

//R- For Reading a single movie
router.get('/:id',MovieDetail)

//C- For Creating
router.post('/',MovieCreate)

//U- For Updating
router.put('/:id',MovieUpdate)

//D- For Deleting
router.delete('/:id',MovieDelete)


export default router;
