import { Router } from "express";
import { join } from "path";

const router = Router();

/* Página de login */
router.get("/login", function (_req, res, _next) {
  res.sendHTML(join(process.cwd(), "dist", "layouts", "login.html"));
});

export default router;
