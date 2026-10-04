//A-Q3: GET/users/by-email
import { User } from "../../DB/models/index.js"

export default async (req, res) =>{
  const user = await User.findOne({ where: { email: req.query.email } })
  user ? res.json({ user }) : res.status(404).json({ message: "no user found" })
}
