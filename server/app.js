var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
const { ApolloServer} = require('apollo-server-express');
const mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
let userResolver = require('./schema/user')
let postResolver = require('./schema/post')
// Construct a schema, using GraphQL schema language
const typeDefs = require('./schema/typedef')

// Provide resolver functions for your schema fields
const resolvers = {Query:{...userResolver.Query,...postResolver.Query},Mutation:{...userResolver.Mutation}};
// server ready to accept connections here
async function startGraphQL() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start()
    server.applyMiddleware({ app });
    await mongoose.connect(process.env.MONGO_URL);
}
startGraphQL()
module.exports = app;
