// controllers/userController.js
const userService = require("../Services/userService");

async function getUser(req, res) {
    try {
        const users = await userService.getUsers();
        const userId = parseInt(req.query.id);
        
        if (userId) {
            const user = users.find(user => user.id === userId);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } else {
            res.json(users);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getUser
};
