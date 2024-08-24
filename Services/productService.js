// services/userService.js
const sql = require("mssql/msnodesqlv8");
const dbConfig = require("../dbConfig");
const SaveResponse = require("../Shared/SaveResponse");

async function getProducts() {
    try {
        await sql.connect(dbConfig);
        const result = await sql.query("GetProducts");
        return result.recordset;
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getProductByProductID(ProductID) {
    try {
        await sql.connect(dbConfig);
        const request = new sql.Request();
        request.input('ProductID', sql.Int, ProductID);
        console.log(ProductID);
        
        const result = await request.execute("GetProductByProductID");
        return result.recordset;
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = {
    getProducts,getProductByProductID
    //, saveUser, AuthenticateUser
};
