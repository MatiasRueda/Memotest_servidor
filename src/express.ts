import express, { Application } from "express";
import cors from "cors";
import getRoutes from "./route/get.routes";
import postRoutes from "./route/post.routes";
import putRoutes from "./route/put.routes"

const app: Application = express();

app.use(
    cors({
      origin: "*",
    })
);

app.use(express.json());

app.use(getRoutes);
app.use(postRoutes);
app.use(putRoutes);


app.set("port", process.env.PORT || 5000);

export default app;