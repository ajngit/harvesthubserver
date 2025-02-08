// const sql = require('mssql/msnodesqlv8');

// const config = {
//   //  connectionString: "Driver={ODBC Driver 18 for SQL Server};Server=LAPTOP-QAF46VQE;Database=HarvestHub;Trusted_Connection=yes;TrustServerCertificate=yes;"
//   connectionString: "Driver={ODBC Driver 18 for SQL Server};Server=mssql-191972-0.cloudclusters.net,10218;Database=HarvestHub;UID=admin;PWD=Adm!n001;TrustServerCertificate=yes;"

// };

// module.exports = config;
const sql = require('mssql');

const config = {
  user: 'admin',
  password: 'Adm!n001',
  server: 'mssql-191972-0.cloudclusters.net',
  database: 'HarvestHub',
  port: 10218,
  encrypt: true, // Always use encrypt for cloud deployments
  trustServerCertificate: true, // Skip certificate validation (optional)
};

module.exports = config;
