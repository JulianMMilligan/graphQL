const express = require ("express");
const app = express();
const port = 6969;
const { graphqlHTTP } = require("express-graphql");


//graphQl Stuff
//imports from other file 
const schema = require("./Schema/index")


//graphQL Schema








//graphQL Server
app.use(
    '/graphql' , 
    graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, () => 
{
    console.log("Server is running");
});