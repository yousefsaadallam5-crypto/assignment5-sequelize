//B-Q3: GET/posts/details
import { Post, User, Comment } from "../../DB/models/index.js"

export default async (req, res) => {
  const posts = await Post.findAll({
    attributes: ["id", "title"],
    include: [
      { model: User, as: "user", attributes: ["id", "name"] },
      { model: Comment, as: "comments", attributes: ["id", "content"] },
    ],
  })
  res.json(posts)
}
