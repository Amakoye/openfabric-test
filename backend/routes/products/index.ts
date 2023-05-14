import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../../controllers/products/products";
import authenticateToken from "../../middleware/auth/auth";

const productRouter: Router = Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/", authenticateToken, createProduct);
productRouter.put("/:id", authenticateToken, updateProduct);
productRouter.delete("/:id", authenticateToken, deleteProduct);

export default productRouter;
