import { Router } from "express"
import create from "./q1-create.js"
import remove from "./q2-delete.js"
import details from "./q3-details.js"
import commentCount from "./q4-comment-count.js"

const router = Router()

router.post("/", create)
router.get("/details", details)
router.get("/comment-count", commentCount)
router.delete("/:postId", remove)

export default router
