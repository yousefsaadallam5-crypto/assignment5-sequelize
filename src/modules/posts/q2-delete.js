//B-Q2: DELETE/posts
import { Post } from "../../DB/models/index.js"

export default async (req, res) => {
  const post = await Post.findByPk(req.params.postId)
  if (!post) return res.status(404).json({ message: "Post not found." })
  if (post.userId !== Number(req.body.userId))
    return res.status(403).json({ message: "You are not authorized to delete this post." })

  await post.destroy()
  res.json({ message: "Post deleted." })
}
