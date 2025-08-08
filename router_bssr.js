const express = require("express");
const router_bssr = express.Router();
const ShopController = require("./controllers/ShopController");
// const productController = require("./controllers/productController");
// const uploader_product = require("./utils/upload-multer")("products");

// const uploader_memeber = require("./utils/upload-multer")("members");
/****************************
 *         BSSR EJS        *
 ***************************/

// router_bssr.get("/", ShopController.home);

router_bssr.get("/signup", ShopController.getSignupMyShop)
router_bssr.post("/signup", ShopController.signupProcess);

router_bssr.get("/login", ShopController.getLoginMyShop)
 router_bssr.post("/login", ShopController.loginProcess);

// router_bssr.get("/logout", ShopController.logout);

// router_bssr.get("/check-me", ShopController.checkSessions);

// router_bssr.get("/products/menu", ShopController.getMyShoppData);
// router_bssr.post(
//   "/products/create",
//   ShopController.validateAuthShopp,
//   uploader_product.array("product_images", 5),
//   productController.addNewProduct
// );
// router_bssr.post(
//   "/products/edit/:id",
//   ShopController.validateAuthShopp,
//   productController.updateChosenProduct
// );
module.exports = router_bssr;
