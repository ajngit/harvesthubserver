// /dbConfig.js
const sql = require("mssql/msnodesqlv8");

const config = {
    server: "LAPTOP-MBNNNHC8\\MSSQLSERVER01",
    database: "Test",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
};

module.exports = config;
