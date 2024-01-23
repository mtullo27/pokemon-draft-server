import express from "express"

import {
    getAllCoaches,
    getCoach,
    createCoach,
    updateCoach,
    deleteCoach,
    getTeam
} from "../controllers/coachController.js"

const router = express.Router()

router.get("/", getAllCoaches)
router.get("/:id", getCoach)
router.post("/", createCoach)
router.put("/:id", updateCoach)
router.delete("/:id", deleteCoach)
router.get("/:coachid/team", getTeam)

export default router
