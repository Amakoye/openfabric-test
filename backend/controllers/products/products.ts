import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import Product, { ProductInterface } from "../../models/products/product";

export const validateProductRules = [
  body("title").notEmpty().withMessage("Product name is required."),
  body("price")
    .notEmpty()
    .withMessage("Product price is required.")
    .isNumeric()
    .withMessage("Product price must be a number."),
  body("description").notEmpty().withMessage("Product name is required."),
  body("brand").notEmpty().withMessage("Product name is required."),
  body("category").notEmpty().withMessage("Product name is required."),
];

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products: ProductInterface[] = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error?.Error, message: error?._message });
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product: ProductInterface | null = await Product.findById(
      req.params.id
    );
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.json(product);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error?.Error, message: error?._message });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    const product: ProductInterface = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error?.Error, message: error?._message });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    const product: ProductInterface | null = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ error: error?.Error, message: error?._message });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product: ProductInterface | null = await Product.findByIdAndDelete(
      req.params.id
    );
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error?.Error, message: error?._message });
  }
};
