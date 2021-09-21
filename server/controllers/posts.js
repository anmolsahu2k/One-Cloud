import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

import fs from 'fs';
import util from 'util';
const unlinkFile = util.promisify(fs.unlink);

import { uploadFile, deleteFile } from './s3.js';

const router = express.Router();
export const getPost = async (req, res) => {
    const { id } = req.params;
    try {
        const posts = await PostMessage.find({ creator: id });

        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const file = req.file
    await uploadFile(file, post)
    await unlinkFile(file.path)
    let awsURL = `https://mern-stack-app.s3.ap-south-1.amazonaws.com/${post.name}/${file.filename}`;
    const type = file.mimetype.split("/")[0];
    const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString(), filePath: awsURL, fileType: type })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const file = req.file;

    await uploadFile(file, post)
    await unlinkFile(file.path)
    let awsURL = `https://mern-stack-app.s3.ap-south-1.amazonaws.com/${post.name}/${file.filename}`;
    const type = file.mimetype.split("/")[0];
    const updatedPost = { ...post, filePath: awsURL, fileType: type };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    const post = await PostMessage.findById(id);

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await deleteFile(post.filePath.substring(51));
    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}


export default router;