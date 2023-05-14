import { Router } from "express";
import { loginUser, registerUser } from "../../controllers/auth/auth";

const authRouter: Router = Router();

authRouter.post("/login", loginUser);
authRouter.post("/register", registerUser);

export default authRouter;
