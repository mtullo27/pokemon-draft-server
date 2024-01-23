import pkg from "pg"
import { pgUser, pgHost, pgDatabase, pgPassword, pgPort } from "./config.js"

const { Pool } = pkg

export const pool = new Pool({
    user: pgUser,
    host: pgHost,
    database: pgDatabase,
    password: pgPassword,
    port: pgPort,
    ssl: !pgHost.includes("cloud") && false
})

pool.on("connect", () => {
    console.log(`connected to database`)
})
