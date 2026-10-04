//A-Q1: POST/users/signup
import { User } from "../../DB/models/index.js"

export default async (req, res) =>{
  try {
    if (await User.findOne({ where: { email: req.body.email } }))
      return res.status(409).json({ message: "Email already exists." })

    await User.build(req.body).save()
    res.status(201).json({ message: "User added successfully." })
  } catch (e){
    res.status(400).json({ message: e.errors?.[0]?.message || e.message })
  }
}
