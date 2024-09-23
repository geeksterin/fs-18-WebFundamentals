import { productModel } from "../models/productModel.js";

export async function createProduct(req, res) {
  try {
    let {
      name,
      brand,
      category,
      price,
      description,
      inStock,
      inventory,
      addedBy,
    } = req.body;
    const product = new productModel({
      name,
      brand,
      category,
      price,
      description,
      inStock,
      inventory,
      addedBy,
    });
    await product.save();
    res.status(201).json({ message: "product added" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

//FETCH ALL PRODCUCT
export async function getAllProducts(req, res) {
  const allProducts = await productModel.find({});
  res.json(allProducts);
}

export async function deleteProduct(req, res) {
  try {
    const idToDelete = req.params.id;
    const productDeleted = await productModel.findByIdAndDelete(idToDelete);
    if (productDeleted) res.json({ message: "Product Deleted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

//FETCH A SINGLE PRODCUCT

export async function getSingleProduct(req, res) {
  const idToFind = req.params.id;
  const singleProduct = await productModel.findById({ _id: idToFind });
  res.json(singleProduct);
}
//SORTING BY PRICE / CATEGORY / BRAND
