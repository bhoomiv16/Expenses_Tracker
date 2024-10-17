import { Router } from "express";
import { login, register } from "../controllers/userController.js";

let router=Router();

router.post("/register",register)
router.post("/login",login)


export default router;