import { Router } from "express";
import {
  getElectricians,
  addElectrician,
  deleteElectrician,
  getElectricianDetails,
} from "../controllers/ElectricianController.js";

const router = Router();

router.get("/", getElectricians);
router.get("/details", getElectricianDetails);
router.post("/add", addElectrician);
router.delete("/delete", deleteElectrician);

export default router;
