let posts = require('../data/post.json');
module.exports = {
    Query: {
        getPosts: () => {
            return posts;
        }
    }
}