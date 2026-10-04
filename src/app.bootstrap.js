import "express-async-errors"
import express from "express"
import { sequelize } from "./DB/connection.js"
import "./DB/models/index.js"
import userRouter from "./modules/users/user.controller.js"
import postRouter from "./modules/posts/post.controller.js"
import commentRouter from "./modules/comments/comment.controller.js"

export default async function bootstrap(){
  const app = express()
  app.use(express.json())

  app.use("/users", userRouter)
  app.use("/posts", postRouter)
  app.use("/comments", commentRouter)

  app.use((req, res) => res.status(404).json({ message: "Route not found" }))
  app.use((err, req, res, next) => res.status(500).json({ message: err.message }))

  await sequelize.sync({ alter: true })
  app.listen(3000, () => console.log("Server running on port 3000"))
}
