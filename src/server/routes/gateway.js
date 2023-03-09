//**************************************/
// Lista de rutas que sirven como gateway hacia APIs
//**************************************/

import { Router } from "express";
import productController from "../controllers/product.controller.js";

const router = Router();

/* Rutas de productos */
router.get("/products", productController.getAll);
// router.get("/products/:id", productController.getById);
// router.get("/products/related", productController.getRelated);

export default router;
