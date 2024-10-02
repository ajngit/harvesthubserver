const productService = require("../Services/productService");

async function getProducts(req, res) {
    try {
        const products = await productService.getProducts();
        
        
        
            if (products) {
                res.json(products);
            } else {
                res.status(404).json({ error: "Page not found" });
            }
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getProductByProductID(req, res) {
    try {
        
        const ProductID = parseInt(req.query.ProductID);
        const product = await productService.getProductByProductID(ProductID);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: "Page not found" });
        }
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getProductByProductRegID(req, res) {
    try {
        
        const ProductRegID = parseInt(req.query.ProductRegID);
        const product = await productService.getProductByProductRegID(ProductRegID);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: "Page not found" });
        }
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getCart(req, res) {
    try {
        
        const UserID = parseInt(req.query.UserID);
        const product = await productService.getCart(UserID);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: "Page not found" });
        }
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
module.exports = {
    getProducts,getProductByProductID,getProductByProductRegID,getCart
    //,saveUser,AuthenticateUser
};
