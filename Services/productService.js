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

async function getProductByProductRegID(ProductRegID) {
    try {
        await sql.connect(dbConfig);
        const request = new sql.Request();
        request.input('ProductRegID', sql.Int, ProductRegID);
        console.log(ProductRegID);
        
        const result = await request.execute("GetRegistrationByProductRegID");
        console.log(result);
        
        return result.recordset;
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getCart(UserID) {
    try {
        await sql.connect(dbConfig);
        const request = new sql.Request();
        request.input('UserID', sql.Int, UserID);
        console.log(UserID);
        
        const result = await request.execute("GetCart");
        return result.recordset;
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getCustomerInfo(UserID) {
    try {
        await sql.connect(dbConfig);
        const request = new sql.Request();
        request.input('UserID', sql.Int, UserID);
        console.log(UserID);
        
        const result = await request.execute("GetContactInfo");
        return result.recordset;
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getOrderInfo(OrderID) {
    try {
        await sql.connect(dbConfig);
        const request = new sql.Request();
        request.input('OrderID', sql.Int, OrderID);
        console.log(OrderID);
        
        const result = await request.execute("GetOrderInfo");
        return result.recordset;
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getOrderList() {
    try {
        await sql.connect(dbConfig);
        const request = new sql.Request();
       
        const result = await request.execute("GetOrderList");
        return result.recordset;
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = {
    getProducts
    ,getProductByProductID
    ,getProductByProductRegID
    ,getCart
    ,getCustomerInfo
    ,getOrderInfo
    ,getOrderList
 
};