const sql = require('mssql/msnodesqlv8');

const config = {
  //  connectionString: "Driver={ODBC Driver 18 for SQL Server};Server=LAPTOP-QAF46VQE;Database=HarvestHub;Trusted_Connection=yes;TrustServerCertificate=yes;"
  connectionString: "Driver={ODBC Driver 18 for SQL Server};Server=mssql-191972-0.cloudclusters.net,10218;Database=HarvestHub;User ID=admin;Password=Adm!n001;TrustServerCertificate=yes;"

};

module.exports = config;
