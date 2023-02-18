import mongoose from "mongoose";

const Post = new mongoose.Schema({
    dui: { type: String, required: true},
    amount: { type: Number, required: true},
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;