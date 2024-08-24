// app.js
const express = require("express");
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productRoutes");

const app = express();

app.use(cors({
    origin: ["http://localhost:4200","http://localhost:1433"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);
app.use("/", productRoutes);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
