import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

import pokemonRoutes from "./routes/pokemonRoutes.js"
import coachRoutes from "./routes/coachRoutes.js"

const PORT = process.env.PORT || 5001

const app = express()
app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))

app.get("/", (req, res) => {
    res.send("server is up")
})

app.use("/pokemon", pokemonRoutes)
app.use("/coaches", coachRoutes)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
