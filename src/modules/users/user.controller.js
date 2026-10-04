import { Router } from "express"
import signup from "./q1-signup.js"
import upsert from "./q2-upsert.js"
import byEmail from "./q3-by-email.js"
import byId from "./q4-by-id.js"

const router = Router()

router.post("/signup", signup)
router.get("/by-email", byEmail)
router.put("/:id", upsert)
router.get("/:id", byId)

export default router
