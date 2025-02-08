// const sql = require('mssql/msnodesqlv8');

// const config = {
//     connectionString: "Driver={ODBC Driver 18 for SQL Server};Server=LAPTOP-QAF46VQE;Database=HarvestHub;Trusted_Connection=yes;TrustServerCertificate=yes;"
// };

// async function testConnection() {
//     try {
//         await sql.connect(config);
//         console.log("Connected successfully!");
//         const result = await sql.query("SELECT * FROM Users_NotDeleted");

//         console.log(result);
        
   
        
//     } catch (err) {
//         console.error("Connection failed:", err);
//     } finally {
//         await sql.close();
//     }
// }

// testConnection();
// //error: 'The "config.server" property is required and must be of type string.'