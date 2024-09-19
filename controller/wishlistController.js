const wishlist=require('../Models/wishlistModel')

//add
exports.addToWishlistController=async(req,res)=>{
    const {id,title,price,description,category,image,rating}=req.body
    const userId=req.payload
    try{
        const existingProduct = await wishlist.findOne({id,userId})
        if(existingProduct){
            res.status(406).json("Item already exist")
        }else{
            const newProduct = new wishlist({
                id,title,price,description,category,image,rating,userId
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        }

    }catch(err){
        res.status(401).json(err)
    }
}

//get
exports.getWishlistController=async(req,res)=>{
    const userId=req.payload
    try{
        const allproducts=await wishlist.find({userId})
        res.status(200).json(allproducts)
    }catch(err){
        res.status(401).json(err)
    }
}


//remove
exports.removeProductController=async(req,res)=>{
    const {id}=req.params
    try{
        const removeProduct=await wishlist.findByIdAndDelete
        ({_id:id})
        res.status(200).json(removeProduct)
    }catch(err){
        res.status(401).json(err)
    }
}
