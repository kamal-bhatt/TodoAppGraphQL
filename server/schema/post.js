const mongoose = require('mongoose');
let Post = require('../models/Post');
let User = require('../models/User');
module.exports = {
    Query: {
        getPosts: async () => {
            try {
                let posts = await Post.find();
                return posts;
            } catch (error) {
                throw new Error(error)
            }
        }
    },
    Mutation: {
        savePost: async (parent, args) => {
            try {
                let data = args.input;
                let user = User.findOne({ email: data.email }).exec()
                data["userId"] = user._id;
                delete data.email;
                let postObj = new Post(data);
                let post = await postObj.save();
                return post;
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}