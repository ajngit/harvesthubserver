const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors({
    origin:"http://localhost:4200",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//const http = require("http");


const userData = [{
    id: 1,
    user: "biju"
},
{
    id: 2,
    user: "binu"
}
];

app.post("/user", (req, res) => {
    const UserID =parseInt(req.query.id);

    if(UserID){
        const FilteredData = userData.filter((data) => { if(data.id === UserID){
            res.json(data);
        } });
    }else{
        res.json(userData);
    }
    
});


app.get("*", (req, res) => {

    res.send("404");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT);


