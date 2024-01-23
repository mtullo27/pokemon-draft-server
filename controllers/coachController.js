import { pool } from "../dbPG.js"

//coaches table definition
/*
CREATE TABLE IF NOT EXISTS league."Coaches"
(
    "CoachID" integer NOT NULL DEFAULT nextval('league."Coaches_CoachID_seq"'::regclass),
    "Name" text COLLATE pg_catalog."default" NOT NULL,
    "ShowdownName" text COLLATE pg_catalog."default",
    "Win" integer,
    "Loss" integer,
    "Kills" integer,
    "Deaths" integer,
    "LeagueID" integer,
    "Password" text COLLATE pg_catalog."default",
    CONSTRAINT "Coaches_pkey" PRIMARY KEY ("CoachID")
)
*/

export const getAllCoaches = async (req, res) => {
    ;(async () => {
        const client = await pool.connect()
        try {
            const result = await client.query(
                `SELECT * FROM "league"."Coaches" ORDER BY "CoachID" ASC`
            )
            res.send(result.rows)
        } catch (err) {
            res.send(err.stack)
        } finally {
            client.release()
        }
    })().catch((err) => console.log(err.stack))
}

export const getCoach = async (req, res) => {
    ;(async () => {
        const client = await pool.connect()
        try {
            const result = await client.query(
                `SELECT * FROM "league"."Coaches" WHERE "CoachID" = ${req.params.id}`
            )
            res.send(result.rows)
        } catch (err) {
            res.send(err.stack)
        } finally {
            client.release()
        }
    })().catch((err) => console.log(err.stack))
}

export const getCoachByName = async (req, res) => {
    ;(async () => {
        const client = await pool.connect()
        try {
            const result = await client.query(
                `SELECT * FROM "league"."Coaches" WHERE "Name" = '${req.params.name}'`
            )
            res.send(result.rows)
        } catch (err) {
            res.send(err.stack)
        } finally {
            client.release()
        }
    })().catch((err) => console.log(err.stack))
}

export const getTeam = async (req, res) => {
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

export const updateCoach = async (req, res) => {
    ;(async () => {
        const client = await pool.connect()
        try {
            const result = await client.query(
                `UPDATE "league"."Coaches" SET "Name" = '${req.body.name}', "ShowdownName" = '${req.body.showdownname}', "Win" = ${req.body.win}, "Loss" = ${req.body.loss}, "Kills" = ${req.body.kills}, "Deaths" = ${req.body.deaths}, "LeagueID" = ${req.body.leagueid}, "Password" = '${req.body.password}' WHERE "CoachID" = ${req.params.id}`
            )
            res.send(result.rows)
        } catch (err) {
            res.send(err.stack)
        } finally {
            client.release()
        }
    })().catch((err) => console.log(err.stack))
}

export const createCoach = async (req, res) => {
    ;(async () => {
        const client = await pool.connect()
        try {
            const result = await client.query(
                `INSERT INTO "league"."Coaches" ("Name", "ShowdownName", "Win", "Loss", "Kills", "Deaths", "LeagueID", "Password") VALUES ('${req.body.name}', '${req.body.showdownname}', ${req.body.win}, ${req.body.loss}, ${req.body.kills}, ${req.body.deaths}, ${req.body.leagueid}, '${req.body.password}')`
            )
            res.send(result.rows)
        } catch (err) {
            res.send(err.stack)
        } finally {
            client.release()
        }
    })()
}

export const deleteCoach = async (req, res) => {
    ;(async () => {
        const client = await pool.connect()
        try {
            const result = await client.query(
                `DELETE FROM "league"."Coaches" WHERE "CoachID" = ${req.params.id}`
            )
            res.send(result.rows)
        } catch (err) {
            res.send(err.stack)
        } finally {
            client.release()
        }
    })()
}
