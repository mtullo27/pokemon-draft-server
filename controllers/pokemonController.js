import { pool } from "../dbPG.js"

export const getCommands = async (req, res) => {
    ;(async () => {
        const client = await pool.connect()
        try {
            const result = await client.query(
                `SELECT * FROM "Monitor"."CommandQueue" ORDER BY "CommandID" ASC`
            )
            res.send(result.rows)
        } catch (err) {
            res.send(err.stack)
        } finally {
            client.release()
        }
    })().catch((err) => console.log(err.stack))
}
