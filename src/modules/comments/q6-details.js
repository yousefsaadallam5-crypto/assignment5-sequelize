//C-Q6: GET/comments/details
import { Comment, User, Post } from "../../DB/models/index.js"

export default async (req, res) => {
  const comment = await Comment.findByPk(req.params.id, {
    attributes: ["id", "content"],
    include: [
      { model: User, as: "user", attributes: ["id", "name", "email"] },
      { model: Post, as: "post", attributes: ["id", "title", "content"] },
    ],
  })
  comment ? res.json(comment) : res.status(404).json({ message: "no comment found"})
}
