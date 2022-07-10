/** @format */

import express from "express";

import { get_employees } from "../Controller/employees-controller.js";

const router = express.Router();

router.get("/get_employees", get_employees);

export default router;
