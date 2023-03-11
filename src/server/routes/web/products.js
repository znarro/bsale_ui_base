import { Router } from "express";
import { join } from "path";

const router = Router();

/* Página de listado de productos */
router.get("/", function (_req, res, _next) {
  res.sendHTML(join(process.cwd(), "dist", "layouts", "products.html"));
});

// TODO: Consultar si sería mejor solo manejar la ruta principal desde express, y las demás como rutas del cliente? Para no llenarnos de HTMLs

/* Página de un producto por ID */
// router.get("/:id", function (_req, res, _next) {
//   res.sendHTML(join(process.cwd(), "dist", "layouts", "products.html"));
// });

export default router;
