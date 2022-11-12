const graphql  = require("graphql");
const {GraphQLObjectType , GraphQLSchema, GraphQLInt , GraphQLString , GraphQLList} = graphql;


const UserType = require("./Types/UserTypes")

const userData = require("../MOCK_DATA.json");  //goes back one folder

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields:{
        getAllUser: {
            type : new GraphQLList(UserType),
            args: {id: {type: GraphQLInt}},
            resolve (parent , args) {
              return userData  //this is where SQL query would go
            }
        }
    }
});
const Mutation  = new GraphQLObjectType({
    name: "mutations",
    fields:{
        createUser:{
            type:UserType,
            args: {
                firstName: {type: GraphQLString},
                lastName: {type: GraphQLString},
                email: {type: GraphQLString},
                password: {type: GraphQLString}
            },
            resolve(parent, args) {
                userData.push({id: userData.length + 1 , firstName: args.firstName , lastName: args.lastName , email: args.email , password: args.password})  //this is where sql update would go
                return args
            }
        }

    }
});

module.exports = new GraphQLSchema ({query: RootQuery, mutation : Mutation})