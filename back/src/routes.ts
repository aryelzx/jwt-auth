import { Router } from "express";
import { UserController } from "./controller/UserController";

const usercontroller = new UserController();

export const router = Router();

router.get("/list", usercontroller.index);
router.post("/create", usercontroller.store);
