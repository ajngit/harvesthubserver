function Validation(req,res,next){
    if(req.token){
        console.log("validated");
        next();
        return;
    }
    
    console.log("No Token");

}

module.exports=Validation;