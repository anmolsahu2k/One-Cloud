import express from 'express';

import { getPost, createPost, updatePost, deletePost } from '../controllers/posts.js';
import upload from '../helpers/filehelper.js'
const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/:id', auth, getPost);
router.post('/', upload.single('selectedFile'), auth, createPost);
router.patch('/:id', upload.single('selectedFile'), auth, updatePost);
router.delete('/:id', auth, deletePost);

export default router;