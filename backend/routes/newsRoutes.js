import { Router } from "express";
import { addNews, getAllNews } from "../controllers/newsController.js";
const router = Router();

router.get("/", getAllNews);
router.post("/", addNews);

export default router;
