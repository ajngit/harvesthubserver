// services/userService.js
const sql = require("mssql/msnodesqlv8");
const dbConfig = require("../dbConfig");

async function getUsers() {
    try {
        await sql.connect(dbConfig);
        const result = await sql.query("SELECT * FROM users");
        return result.recordset;
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = {
    getUsers
};
