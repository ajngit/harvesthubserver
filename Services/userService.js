// services/userService.js
const sql = require("mssql/msnodesqlv8");
const dbConfig = require("../dbConfig");
const SaveResponse = require("../Shared/SaveResponse");

async function getUsers() {
    try {
        await sql.connect(dbConfig);
        const result = await sql.query("SELECT * FROM Users_NotDeleted");
        return result.recordset;
    } catch (err) {
        throw new Error(err.message);
    }
}

async function saveUser(user) {
    try {
        
        const { UserName, UserID, Email, Password, ConfirmPassword, Role, IsActive } = user;
        await sql.connect(dbConfig);

         // Prepare the request for the stored procedure
         const request = new sql.Request();
        const Response ='';
         // Add parameters to the request
         request.input('UserName', sql.NVarChar, UserName);
         request.input('UserID', sql.Int, UserID);
         request.input('Email', sql.NVarChar, Email);
         request.input('Password', sql.NVarChar, Password);
         //request.input('ConfirmPassword', sql.NVarChar, ConfirmPassword);
         request.input('Role', sql.NVarChar, Role);
         request.input('IsActive', sql.Bit, IsActive);
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


async function AuthenticateUser(user) {
    try {
        
        const {  Email, Password } = user;

        await sql.connect(dbConfig);

        const request = new sql.Request();
        
        request.input('Email', sql.NVarChar, Email);
        request.input('Password', sql.NVarChar, Password);
        const Response ='';
        request.output('Response',sql.NVarChar,Response);
 
        const result = await request.execute('AuthenticateUser');

        const Resp = new SaveResponse();

        if(result.recordset.length>0){
            Resp.Status ='success';
            Resp.Saved =true;
            Resp.ID =result.output.Response;
        }else{
            Resp.Status ='failed';
            Resp.Saved =false;
        }

        console.log(Resp);
         
        return Resp;

    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = {
    getUsers, saveUser, AuthenticateUser
};
