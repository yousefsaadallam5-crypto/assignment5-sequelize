//B-Q4: GET/posts/comment-count
import { sequelize } from "../../DB/connection.js"
import { Post, Comment } from "../../DB/models/index.js"

export default async (req, res) =>{
  const posts = await Post.findAll({
    attributes: ["id", "title", [sequelize.fn("COUNT", sequelize.col("comments.id")), "commentCount"]],
    include: [{ model: Comment, as: "comments", attributes: [] }],
    group: ["Post.id"],
    subQuery: false,
  })
  res.json(posts)
}
