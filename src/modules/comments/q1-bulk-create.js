//C-Q1: POST/comments
import {Comment} from "../../DB/models/index.js"

export default async (req, res) =>{
  await Comment.bulkCreate(req.body.comments)
  res.status(201).json({ message:"comments created." })
}
