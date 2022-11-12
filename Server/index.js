const express = require ("express");
const app = express();
const port = 6969;
const { graphqlHTTP } = require("express-graphql");


//graphQl Stuff
//imports from other file 
//graphQL Schema

const schema = require("./Schema/index")






//graphQL listener
app.use(
    '/graphql' , 
    graphqlHTTP({
    schema,
    graphiql: true
}))


//express Server
app.listen(port, () => 
{
    console.log("Server is running");
});