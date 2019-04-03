import express from "express";

const app = express();
const port = 3000; // default port to listen

app.use(express.static(`${__dirname}/dist`));

app.get("*", (req, res) => {
  res.send("Welcome to xences");
});

app.listen(process.env.PORT || port);
