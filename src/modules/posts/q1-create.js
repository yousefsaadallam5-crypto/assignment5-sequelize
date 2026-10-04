// B-Q1: POST /posts
import { Post } from "../../DB/models/index.js"

export default async (req, res) => {
  await new Post(req.body).save()
  res.status(201).json({ message: "Post created successfully." })
}
