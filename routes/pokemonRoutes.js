import express from "express"

import {
    getPokemon,
    getAllPokemon,
    getPokemonByCoachID,
    getPokemonByPts,
    updatePokemon
} from "../controllers/pokemonController.js"

const router = express.Router()

router.get("/", getAllPokemon)
router.get("/:id", getPokemon)
router.get("/coach/:coachid", getPokemonByCoachID)
router.get("/pts/:pts", getPokemonByPts)
router.put("/:id", updatePokemon)

export default router
