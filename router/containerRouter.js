import express from 'express';
import * as containerController from '../controller/containerController.js'
const router = express.Router();

router.get("/", containerController.getByDate)

export default router;
