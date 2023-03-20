const User = require("../models/User")
module.exports = {
    Query: {
        getUsers: async () => {
            try {
                let users = await User.find()
                return users;
            } catch (error) {
                throw new Error(error)
            }
        },
        getUser: (parent, args, contextValue, info) => {
            try {
                console.log(parent, args, contextValue, info)
                return users.find((val) => { return val.id == parseInt(args.id) })
            } catch (error) {
                throw new Error(error)
            }
        },
    }, Mutation: {
        createUser: async (parent, args) => {
            try {
                console.log("args", args)
                let user = new User(args.input);
                await user.save();
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}