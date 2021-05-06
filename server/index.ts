import express from "express";
import { Request, Response } from "express";

import { getComments, getPosts, getImages } from "./api";

const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "../../app/build")));

app.get("/posts", async (req: Request, res: Response) => {
  const posts = getPosts();

  if (posts) {
    res.status(200);

    res.send(posts);
  } else {
    res.status(500);
  }
});

app.get("/comments/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const comments = getComments(id);

  if (comments) {
    res.status(200);

    res.send(comments);
  } else {
    res.status(500);
  }
});

app.get("/images", async (req: Request, res: Response) => {
  const images = await getImages();

  if (images) {
    res.status(200);

    res.send(images);
  } else {
    res.status(500);
  }
});

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.resolve("../app/build/index.html"));
});

app.listen(port, () => {
  console.log("server started on port 5000");
});
