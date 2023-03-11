//**************************************/
// Lista de rutas que cargan las páginas
//**************************************/
import { Router } from "express";
import { join } from "path";
import usersRoutes from "./users.js";
import productsRoutes from "./products.js";

const router = Router();

router.use("/users", usersRoutes);
router.use("/products", productsRoutes);

/* Ping */
router.get("/ping", (_req, res) => {
  res.sendStatus(200);
});

export default router;
