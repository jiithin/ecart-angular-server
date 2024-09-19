const products = require('../Models/productSchema')

//get all products
exports.getAllProductController=async(req,res)=>{
    
    try{
        const result=await products.find()
        res.status(200).json(result)
        
    }catch(err){
    res.status(401).json(err)
    }
}

//get a product
exports.getAproductController=async(req,res)=>{
    const {id}=req.params
    try{
        const result=await products.findOne({id})
        res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)
    }
}