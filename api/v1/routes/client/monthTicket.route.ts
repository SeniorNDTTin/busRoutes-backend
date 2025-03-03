import express, { Router } from "express";
const router: Router = express.Router();

import validate from "../../validates/client/monthTicket.validate";
import controller from "../../controllers/client/monthTicket.controller"; 

router.post(
  "/create",
  validate.create, 
  controller.create
);

export default router;
