import { Router } from "express";
import { listChat} from "../controllers/room.controllers"

const router = Router;

router.get("/", listChat);

export default router;
