const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

//connect to mongodb
mongoose.connect(
  "mongodb+srv://Nasiru360:M6OXghUAiztS6NY5@cluster0.pa2p11w.mongodb.net/graphql-data?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening on port 4000");
});
