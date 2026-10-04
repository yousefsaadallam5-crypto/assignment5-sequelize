//C-Q5: GET/comments/newest
import {Comment } from "../../DB/models/index.js"

export default async (req, res) =>{
  const comments = await Comment.findAll({
    where: { postId: req.params.postId },
    attributes: ["id", "content", "createdAt"],
    order: [["createdAt", "DESC"]],
    limit: 3,
  })
  res.json(comments)
}
