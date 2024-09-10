import { Router } from "express";
const router = Router();
import * as ComplaintController from "../controllers/ComplaintController.js";

router.get("/", ComplaintController.getComplaints);
router.post("/add", ComplaintController.addComplaint);
router.delete("/delete", ComplaintController.deleteComplaint);
export default router;
