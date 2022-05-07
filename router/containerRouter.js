import express from 'express';
import * as containerController from '../controller/containerController.js'
const router = express.Router();

router.post("/", containerController.getByDate)
router.post("/create", containerController.createContainer)

export default router;
