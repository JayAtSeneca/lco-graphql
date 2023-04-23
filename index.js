import express from ('express');
import resolvers from "./resolvers";
import schema from "./schema";

import { graphqlHTTP } from "express-graphql";

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
