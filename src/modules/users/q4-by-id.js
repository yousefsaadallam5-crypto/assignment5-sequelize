//A-Q4: GET/users/:id
import { User } from "../../DB/models/index.js"

export default async (req, res) =>{
  const user = await User.findByPk(req.params.id, { attributes: { exclude: ["role"] } })
  user ? res.json(user) : res.status(404).json({ message: "no user found" })
}
