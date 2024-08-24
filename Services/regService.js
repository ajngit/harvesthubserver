// services/userService.js
const sql = require("mssql/msnodesqlv8");
const dbConfig = require("../dbConfig");
const SaveResponse = require("../Shared/SaveResponse");



async function SaveRegistration(regData) {
    try {
        
        const {  ProductRegID, ProductID, Quantity, Discount, GrossTotal, NetTotal,
            ServiceCharge, ModifiedDate, ModifiedUser, DelStatus} = regData;
        await sql.connect(dbConfig);

         // Prepare the request for the stored procedure
         const request = new sql.Request();
        const Response ='';
         // Add parameters to the request
         request.input('ProductRegID', sql.Int, UserName);
         request.input('ProductID', sql.Int, UserID);
         request.input('Quantity', sql.int, Email);
         request.input('Discount', sql.Decimal, Password);
         request.input('GrossTotal', sql.Decimal, Role);
         request.input('NetTotal', sql.Decimal, IsActive);
         request.output('Response',sql.NVarChar,Response);
 
         // Execute the stored procedure
         const result = await request.execute('SaveUser');

         const Resp = new SaveResponse();
         Resp.ID =result.output.Response;
         Resp.Status ='success';
         Resp.Saved =true;
         // Return the result from the stored procedure
         console.log(Resp);
         
         return Resp;
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = {
    SaveRegistration
};
