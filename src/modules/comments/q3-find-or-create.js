//C-Q3: POST/comments/find-or-create
import { Comment} from "../../DB/models/index.js"

export default async (req, res) =>{
  const { postId, userId, content } = req.body
  const [comment, created] = await Comment.findOrCreate({ where:{ postId, userId,content }})
  res.json({ comment, created})
}
