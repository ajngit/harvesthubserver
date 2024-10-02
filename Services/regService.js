// services/userService.js
const sql = require("mssql/msnodesqlv8");
const dbConfig = require("../dbConfig");
const SaveResponse = require("../Shared/SaveResponse");



async function SaveRegistration(regData) {
    try {
        
        const {  ProductRegID, ProductID, Quantity, Discount, GrossTotal, NetTotal,
            ServiceCharge,PaymentCharge,DeliveryCharge,TaxCharge, ModifiedUser} = regData;
        await sql.connect(dbConfig);

        console.log(regData);
        

         // Prepare the request for the stored procedure
         const request = new sql.Request();
        const Response ='';
         // Add parameters to the request
         request.input('ProductRegID', sql.Int, ProductRegID);
         request.input('ProductID', sql.Int, ProductID);
         request.input('Quantity', sql.Int, Quantity);
         request.input('Discount', sql.Decimal, Discount);
         request.input('GrossTotal', sql.Decimal, GrossTotal);
         request.input('NetTotal', sql.Decimal, NetTotal);
         request.input('ServiceCharge', sql.Decimal, ServiceCharge);
         request.input('PaymentCharge', sql.Decimal, PaymentCharge);
         request.input('TaxCharge', sql.Decimal, TaxCharge);
         request.input('DeliveryCharge', sql.Decimal, DeliveryCharge);
         request.input('ModifiedUser', sql.Int, ModifiedUser);
         request.output('Response',sql.NVarChar,Response);
 
         // Execute the stored procedure
         const result = await request.execute('SaveRegistration');

         const Resp = new SaveResponse();
         Resp.ID =result.output.Response;
         Resp.Status ='success';
         Resp.Saved =true;
         // Return the result from the stored procedure
         console.log(Resp);
         
         return Resp;
    } catch (err) {
        console.log(err.message);
        
        throw new Error(err.message);
    }
}

async function SaveCustomer(regData) {
    try {
        
        const {  CustomerID ,
            ContactName	,
            Email	,
            Phone,
            StreetAddress ,
            ZipCode,
            ModifiedUser} = regData;
        await sql.connect(dbConfig);

        console.log(regData);
        

         // Prepare the request for the stored procedure
         const request = new sql.Request();
        const Response ='';
         // Add parameters to the request
         request.input('CustomerID', sql.Int, CustomerID);
         request.input('ContactName', sql.NVarChar, ContactName);
         request.input('Email', sql.NVarChar, Email);
         request.input('Phone', sql.NVarChar, Phone);
         request.input('StreetAddress', sql.NVarChar, StreetAddress);
         request.input('ZipCode', sql.NVarChar, ZipCode);
         request.input('ModifiedUser', sql.Int, ModifiedUser);
         request.output('Response',sql.NVarChar,Response);
 
         // Execute the stored procedure
         const result = await request.execute('SaveCustomerInfo');

         const Resp = new SaveResponse();
         Resp.ID =result.output.Response;
         Resp.Status ='success';
         Resp.Saved =true;
         // Return the result from the stored procedure
         console.log(Resp);
         
         return Resp;
    } catch (err) {
        console.log(err.message);
        
        throw new Error(err.message);
    }
}

async function SaveOrder(regData) {
    try {
        
        const {  
            NetTotal,
            PaymentType	,
            ProductRegID,
            ModifiedUser} = regData;
        await sql.connect(dbConfig);

        console.log(regData);
        

         // Prepare the request for the stored procedure
         const request = new sql.Request();
        const Response ='';
         // Add parameters to the request
         request.input('ProductRegID', sql.Int, ProductRegID);
         request.input('NetTotal', sql.Decimal, NetTotal);
         request.input('PaymentType', sql.NVarChar, PaymentType);
         
         request.input('ModifiedUser', sql.Int, ModifiedUser);
         request.output('Response',sql.NVarChar,Response);
 
         // Execute the stored procedure
         const result = await request.execute('SaveOrder');

         const Resp = new SaveResponse();
         Resp.ID =result.output.Response;
         Resp.Status ='success';
         Resp.Saved =true;
         // Return the result from the stored procedure
         console.log(Resp.ID);
         
         return Resp;
    } catch (err) {
        console.log(err.message);
        
        throw new Error(err.message);
    }
}

module.exports = {
    SaveRegistration,SaveCustomer,SaveOrder
};
