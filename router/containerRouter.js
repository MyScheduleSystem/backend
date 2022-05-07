import express from 'express';
import * as containerController from '../controller/containerController.js'
const router = express.Router();

router.post("/", containerController.getByDate)

export default router;
