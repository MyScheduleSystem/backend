import express from "express";
import * as calendarController from '../controller/calendarController.js'
const router = express.Router();

router.post('/', calendarController.getAll)

export default router;