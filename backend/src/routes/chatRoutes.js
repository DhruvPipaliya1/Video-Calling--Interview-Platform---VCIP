import express from "express";
import { getStreamToken } from "../controllers/chatController";
import { protecRoute } from "../middleware/protectRoute";

const router = express.Router();

router.get("/token", protecRoute, getStreamToken);

export default router;