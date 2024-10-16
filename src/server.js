const express = require('express');
const authRouter = require('./routes/auth');
const protectedRouter = require('./routes/protected');

const app = express();


app.use(express.json());
app.use(authRouter);
app.use(protectedRouter);

app.listen(3000, () => {
  console.log("Server is running");
});