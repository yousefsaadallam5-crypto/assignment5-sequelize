//A-Q2: PUT/users/:id
import { User } from "../../DB/models/index.js"

export default async (req, res) =>{
  await User.upsert({ ...req.body, id: req.params.id }, { validate: false })
  res.json({ message: "User created or updated successfully" })
}
