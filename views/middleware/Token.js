function Token(req,res,next){
    
    console.log("token created");
    setInterval(() => {
        const TOKEN ="123";
        req.token  =TOKEN;
        next();
 
    }, 1000 );
   
}


module.exports =Token;