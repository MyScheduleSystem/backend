import express from 'express';
import * as containerController from '../controller/containerController.js'
const router = express.Router();

router.post("/create", containerController.createContainer)
router.get("/", containerController.getByUserId)
router.post("/updateBox", containerController.updateBoxSize)
router.delete("/drop", containerController.dropContainer)
export default router;
