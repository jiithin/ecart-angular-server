const express=require('express')
const productcontroller=require('../controller/productController')
const userController = require('../controller/userConroller')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const wishlistController = require('../controller/wishlistController')
const cartController = require('../controller/cartController')

const router=new express.Router()

//getAllProducts
router.get('/allproducts',productcontroller.getAllProductController)

//register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)

//view product
router.get('/view/:id',productcontroller.getAproductController)

//add to wishlist
router.post('/addtowishlist',jwtMiddleware,wishlistController.addToWishlistController)

//get from wishlist
router.get('/getwishlist',jwtMiddleware,wishlistController.getWishlistController)

//remove from wishlist
router.delete('/remove/:id',jwtMiddleware,wishlistController.removeProductController)

//add to cart
router.post('/addtocart',jwtMiddleware,cartController.addToCartController)

//get cart
router.get('/getcart',jwtMiddleware,cartController.getCartController)

//remove from cart
router.delete('/removecart/:id',jwtMiddleware,cartController.removeCartController)


//increment cart
router.get('/cartincrement/:id',jwtMiddleware,cartController.incrementItem)

//decrement cart
router.get('/cartdecrement/:id',jwtMiddleware,cartController.decrementItem)

//emptycart
router.delete('/emptycart',jwtMiddleware,cartController.emptyCartController)

module.exports=router