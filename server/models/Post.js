const mongoose = require('mongoose');
const { Schema } = mongoose;
const postSchema = new Schema({
  userId: String,
  title: String,
  body: String
});
const Post = mongoose.model('Posts', postSchema);
module.exports = Post;