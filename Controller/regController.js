const regService = require("../Services/regService");

async function SaveRegistration(req, res) {
    try {
            const regData = req.body; 
       
            const resp =await regService.SaveRegistration(regData); 
            res.status(201).json(resp);
        } catch (err) {
            res.status(500).json({ error: err.message });
            console.log(err.message);
            
        }
}

async function SaveCustomer(req, res) {
    try {
            const regData = req.body; 
       
            const resp =await regService.SaveCustomer(regData); 
            res.status(201).json(resp);
        } catch (err) {
            res.status(500).json({ error: err.message });
            console.log(err.message);
            
        }
}

async function SaveOrder(req, res) {
    try {
            const regData = req.body; 
       
            const resp =await regService.SaveOrder(regData); 
            res.status(201).json(resp);
        } catch (err) {
            res.status(500).json({ error: err.message });
            console.log(err.message);
            
        }
}


module.exports = {
    SaveRegistration,SaveCustomer,SaveOrder
};
