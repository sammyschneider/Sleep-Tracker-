const express = require('express');
var { graphqlHTTP } = require('express-graphql');
const schema = require ('./schema.js')

const app = express();

app.use('/graphql', graphqlHTTP({
  schema:schema,
  graphiql:true
}))

app.listen(4000, () => {
  console.log('Server is running on port 4000');
})
