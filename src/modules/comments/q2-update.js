//.C-Q2: PATCH/comments
import { Comment } from "../../DB/models/index.js"

export default async (req, res) =>{
  const comment = await Comment.findByPk(req.params.commentId)
  if (!comment) return res.status(404).json({ message: "comment not found."})
  if (comment.userId !== Number(req.body.userId))
    return res.status(403).json({ message: "You are not authorized to update this comment."})

  await comment.update({ content: req.body.content })
  res.json({ message: "Comment updated."})
}
