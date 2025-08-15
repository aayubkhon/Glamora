const Product = require("../models/Product");
const assert = require("assert");
const Definer = require("../lib/mistake");
let productController = module.exports;

productController.getAllProducts = async (req, res) => {
  try {
    console.log("GET: cont/getAllProducts");
  } catch (err) {
    console.log(`ERROR, cont/getAllProducts,${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

productController.addNewProduct = async (req, res) => {
  try {
    console.log("POST: cont/addNewProduct");
    assert(req.files, Definer.general_err3);

    const product = new Product();
    let data = req.body;
    data.produc_images = req.files.map((ele) => {
      return ele.path;
    });
    const result = await product.addNewProductData(data, req.member);
    const html = `<script>
                  alert('new product added successfully');
                  window.location.replace('/shop/products/collections')
                  </script>`;
    res.end(html);
    assert.ok(result, Definer.product_err1);
  } catch (err) {
    console.log(`ERROR, cont/addNewProduct,${err.message}`);
  }
};

productController.updateChoosenProduct = async (req, res) => {
  try {
    console.log("POST: cont/updateChoosenProduct");
    const product = new Product();
    const id = req.params.id;
    const result = await product.updateChoosenProductData(
      id,
      req.body,
      req.member._id
    );
    await res.json({ state: "success", data: result });
  } catch (err) {
    console.log(`ERROR, cont/updateChoosenProduct,${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};
