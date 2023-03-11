//**************************************/
// Lista de rutas que sirven como gateway hacia APIs
//**************************************/
import { Router } from "express";
import productsRoutes from "./products.js";

const router = Router();

router.use("/products", productsRoutes);

export default router;
