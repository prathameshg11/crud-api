import express from 'express';
import * as dotenv from 'dotenv';

// import Post from '../mongodb/models/post.js'
import { update, del, view } from '../controllers/bank.js';


dotenv.config();

const router = express.Router();

router.post('/update', update);
router.post('/delete', del);
router.post('/view', view);

// router.post()

export default router;