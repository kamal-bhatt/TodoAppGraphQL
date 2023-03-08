let users = require('../data/user.json');
module.exports = {
    Query: {
        getUsers: () => {
            return users;
        },
        getUser: (parent, args, contextValue, info) => {
            console.log(parent, args, contextValue, info)
            return users.find((val) => { return val.id == parseInt(args.id) })
        },
    }, Mutation: {
        createUser: (parent, args) => {
            console.log("args", args)
        }
    }
}