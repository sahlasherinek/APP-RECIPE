import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.set('strictQuery', false);
mongoose.connect(
 "mongodb+srv://sahlasalihek:sahlasalihek@recipecluster.ckycijg.mongodb.net/rec_db?retryWrites=true&w=majority&appName=RecipeCluster",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(
    console.log("DB connected...")
  )

app.listen(4000, () => console.log("Server started"));
