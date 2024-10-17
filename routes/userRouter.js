import { Router } from "express";
import { register } from "module";
import { login } from "../controllers/userController.js";

let router=Router();

router.get("/api/user/register",register)
router.get("/api/user/login",login)


export default router;