import { pool } from "../dbPG.js"

// tbale definintion for Teirs table
// CREATE TABLE IF NOT EXISTS league."Teirs"
//(
//    "PokemonID" text COLLATE pg_catalog."default" NOT NULL,
//    "Pokemon" text COLLATE pg_catalog."default" NOT NULL,
//    "Pts" integer,
//    "SmogonName" text COLLATE pg_catalog."default" NOT NULL,
//    "CoachID" integer,
//   "ID" integer NOT NULL DEFAULT nextval('league."Teirs_ID_seq"'::regclass),
//    CONSTRAINT "Teirs_pkey" PRIMARY KEY ("ID")
//)

export const getAllPokemon = async (req, res) => {
    ;(async () => {
        const client = await pool.connect()
        try {
            const result = await client.query(
                `SELECT * FROM "league"."Teirs" ORDER BY "ID" ASC`
            )
            res.send(result.rows)
        } catch (err) {
            res.send(err.stack)
        } finally {
            client.release()
        }
    })().catch((err) => console.log(err.stack))
}

export const getPokemon = async (req, res) => {
    ;(async () => {
        const client = await pool.connect()
        try {
            const result = await client.query(
                `SELECT * FROM "league"."Teirs" WHERE "ID" = ${req.params.id}`
            )
            res.send(result.rows)
        } catch (err) {
            res.send(err.stack)
        } finally {
            client.release()
        }
    })().catch((err) => console.log(err.stack))
}

export const getPokemonByPts = async (req, res) => {
    ;(async () => {
        console.log("hello")
        const client = await pool.connect()
        try {
            const result = await client.query(
                `SELECT * FROM "league"."Teirs" WHERE "Pts" = ${req.params.pts}`
            )
            res.send(result.rows)
        } catch (err) {
            res.send(err.stack)
        } finally {
            client.release()
        }
    })().catch((err) => console.log(err.stack))
}

export const getPokemonByCoachID = async (req, res) => {
    ;(async () => {
        const client = await pool.connect()
        try {
            const result = await client.query(
                `SELECT * FROM "league"."Teirs" WHERE "CoachID" = ${req.params.coachid}`
            )
            res.send(result.rows)
        } catch (err) {
            res.send(err.stack)
        } finally {
            client.release()
        }
    })().catch((err) => console.log(err.stack))
}

export const createPokemon = async (req, res) => {
    ;(async () => {
        const client = await pool.connect()
        try {
            const result = await client.query(
                `INSERT INTO "league"."Teirs" ("PokemonID", "Pokemon", "Pts", "SmogonName", "CoachID") VALUES ('${req.body.pokemonid}', '${req.body.pokemon}', ${req.body.pts}, '${req.body.smogonname}', ${req.body.coachid})`
            )
            res.send(result.rows)
        } catch (err) {
            res.send(err.stack)
        } finally {
            client.release()
        }
    })().catch((err) => console.log(err.stack))
}

export const updatePokemon = async (req, res) => {
    console.log(req.body)
    ;(async () => {
        const client = await pool.connect()
        try {
            const updateFields = Object.entries(req.body)
                .filter(([key, value]) => value !== undefined)
                .map(([key, value]) => `"${key}" = '${value}'`)
                .join(", ")

            const result = await client.query(
                `UPDATE "league"."Teirs" SET ${updateFields} WHERE "ID" = ${req.params.id}`
            )
            res.send(result.rows)
        } catch (err) {
            res.send(err.stack)
        } finally {
            client.release()
        }
    })().catch((err) => console.log(err.stack))
}
