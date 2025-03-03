import express, { Router } from "express";
const router: Router = express.Router();

import validate from "../../validates/client/customer.validate";
import controller from "../../controllers/client/customer.controller"; 

router.get("/get-email/:email", controller.getByEmail);
router.get("/get-phone/:phone", controller.getByPhone);

router.post(
  "/create",
  validate.create, 
  controller.create
);

export default router;
