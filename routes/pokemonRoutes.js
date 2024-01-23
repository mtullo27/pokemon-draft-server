import express from "express"

import { getPokemon } from "../controllers/pokemonController.js"

const router = express.Router()

router.get("/", getPokemon)

export default router
