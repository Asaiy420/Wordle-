import {Router} from "express";
import { getWord } from "../controllers/game.controller.js";

const router = Router();

router.get("/word", getWord)

export default router;