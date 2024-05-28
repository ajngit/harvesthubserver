// const express = require("express");
// const cors = require("cors");
// const app = express();
// const sql = require("mssql/msnodesqlv8");

// // config with ssms
// var config = {
//     server: "LAPTOP-MBNNNHC8\\MSSQLSERVER01",
//     database: "Test",
//     driver: "msnodesqlv8",
//     options: {
//         trustedConnection: true
//      }
//     //,
//     // authentication: {
//     //     type: "default",
//     //     options: {
//     //         userName: "",
//     //         password: ""
//     //     }
//     // }
// }

// //const connectionString ="Server=LAPTOP-MBNNNHC8\\MSSQLSERVER01;Database=Test;Trusted_Connection=True;"
// const query ="select * from users";


// sql.connect(config, function (err) {
//     if (err) {
//         console.log(err);
//     } else { 
//         var request = new sql.Request();
//         request.query(query, function (err, records) {
//             if (err) {
//                 console.log(err); 
//             } else {
//                 const userData = records.recordset; // Changed here
//                 console.log(userData); // Logs fetched user data
//                 // Define route handler here to have access to userData
//                 app.get("/user", (req, res) => { 
//                     const UserID = parseInt(req.query.id);

//                     if (UserID) {
//                         const filteredData = userData.find(data => data.id === UserID); // Changed here
//                         if (filteredData) {
//                             res.json(filteredData); 
//                         } else {
//                             res.status(404).json({ error: "User not found" });
//                         }
//                     } else {
//                         res.json(userData);
//                     }
//                 });
//             }
//         })
//     }
// })

// app.use(cors({
//     origin: ["http://localhost:4200","http://localhost:1433"],
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("", (req, res) => {
//     res.send("Server Running Successfully");
// });

// const PORT = process.env.PORT || 3001;

// app.listen(PORT);
