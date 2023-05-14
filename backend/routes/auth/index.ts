import { Router } from "express";
import {
  loginUser,
  registerUser,
  validateUserRules,
} from "../../controllers/auth/auth";

const authRouter: Router = Router();

authRouter.post("/login", validateUserRules, loginUser);
authRouter.post("/register", validateUserRules, registerUser);

export default authRouter;
