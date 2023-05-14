import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  validateProductRules,
} from "../../controllers/products/products";
import authenticateToken from "../../middleware/auth/auth";

const productRouter: Router = Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/", authenticateToken, validateProductRules, createProduct);
productRouter.put(
  "/:id",
  authenticateToken,
  validateProductRules,
  updateProduct
);
productRouter.delete("/:id", authenticateToken, deleteProduct);

export default productRouter;
