import { Router } from "express";
import Product from "../../models/product.js";
// import productsController from "../../controllers/product.controller";

const router = Router();

// TODO: consultar si se desea seguir usando controllers o ya no, ya que como ahora estas rutas están modularizadas, ya no crecerá tanto cada archivo y no serían necesarios

/* Ruta que obtiene productos */
router.get("/", async (_req, res) => {
  try {
    const product = new Product();
    const result = await product.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
});

// router.get("/:id", productController.getById);
// router.post("/related", productController.getRelated);

export default router;
