const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getUsers:[User]
    getUser(id:ID!):User
    getPosts:[Post]
  }
  type fullName {
    name:String 
  }
  type Geo {
    lat:String
    lng:String
  }
  type Address {
    street:String
    suite:String
    city:String
    zipcode:String
    geo:Geo
  }
  type Company {
    catchPhrase:String
    bs:String
    name:String
  }
  type User {
    name: String!
    username: String!
    email: String
    address: Address
    phone:String
    website:String
    company:Company
  }
  type Post {
    userId:Int
    id:Int
    title:String
    body:String
  }
  input createUserInput {
    name: String!
    username: String!
    email: String!
    phone:String
    website:String
  }
  input createPostInput {
    email:String!
    title:String!
    body:String!
  }
  type Mutation {
    createUser(input:createUserInput!):User!
    savePost(input:createPostInput!):Post!
  }
`;
module.exports = typeDefs;