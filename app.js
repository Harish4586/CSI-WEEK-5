const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
const dbConnect = require("./config/databaseConnection");

const authRouter = require("./Routers/userRouter");
const profileRouter = require("./Routers/profile");
app.use("/", authRouter);
app.use("/", profileRouter);

dbConnect()
  .then(() => {
    console.log("database connected successfully!!");
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error : " + err);
  });
