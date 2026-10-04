import { Router } from "express"
import bulkCreate from "./q1-bulk-create.js"
import update from "./q2-update.js"
import findOrCreate from "./q3-find-or-create.js"
import search from "./q4-search.js"
import newest from "./q5-newest.js"
import details from "./q6-details.js"

const router = Router()

router.post("/", bulkCreate)
router.post("/find-or-create", findOrCreate)
router.get("/search", search)
router.get("/newest/:postId", newest)
router.get("/details/:id", details)
router.patch("/:commentId", update)

export default router
