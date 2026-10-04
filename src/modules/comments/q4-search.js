//C-Q4: GET/comments
import { Op } from "sequelize"
import {Comment} from "../../DB/models/index.js"

export default async (req, res) =>{
  const { count, rows } = await Comment.findAndCountAll({
    where: { content: {[Op.like]: `%${req.query.word}%` }},
  })
  count ? res.json({ count, comments: rows }) : res.status(404).json({ message: "no comments found." })
}
