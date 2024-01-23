import pkg from "pg"
import dotenv from "dotenv"
dotenv.config()

const { Pool } = pkg

export const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDB,
    password: process.env.PGPASS,
    port: process.env.PGPORT,
    ssl: !process.env.PGHOST.includes("cloud") && false
})

pool.on("connect", () => {
    console.log(`connected to database`)
})
