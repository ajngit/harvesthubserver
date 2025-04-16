const sql = require('mssql');

//azure config

const config = {
  user: 'techhub',
  password: 'TXih@GCML9YzG4V',
  server: 'techhub.database.windows.net',
  database: 'harvesthub',
  port: 1433,
  encrypt: true, // Always use encrypt for cloud deployments
  trustServerCertificate: true, // Skip certificate validation (optional)
  

};

//cloud cluster config


// const config = {
//   user: 'admin',
//   password: 'Adm!n001',
//   server: 'mssql-191972-0.cloudclusters.net',
//   database: 'HarvestHub',
//   port: 10218,
//   encrypt: true, // Always use encrypt for cloud deployments
//   trustServerCertificate: true, // Skip certificate validation (optional)
  

// };

//local config


// const config = {
//   user: 'myuser',
//   password: 'asd123.',
//   server: 'localhost', 
//   database: 'HarvestHub',
//   options: {
//     trustServerCertificate: true,
//   },
// };



module.exports = config;
