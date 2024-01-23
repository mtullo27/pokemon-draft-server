import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

import initializeFirebase from "./initializeFirebase.js"

import deviceRoutes from "./routes/deviceRoutes.js"
import communicationRoutes from "./routes/communicationRoutes.js"
import commandQueueRoutes from "./routes/commandQueueRoutes.js"

const PORT = process.env.PORT || 5001

const app = express()
app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))

initializeFirebase()

app.get("/", (req, res) => {
    res.send("server is up")
})

app.use("/device", deviceRoutes)
app.use("/coms", communicationRoutes)
app.use("/command-queue", commandQueueRoutes)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
