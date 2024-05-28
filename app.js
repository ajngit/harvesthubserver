// app.js
const express = require("express");
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes");

const app = express();

app.use(cors({
    origin: ["http://localhost:4200","http://localhost:1433"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
