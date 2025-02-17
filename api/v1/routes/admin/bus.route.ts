import express, { Router } from "express";
const router: Router = express.Router();

import validate from "../../validates/admin/bus.validate";
import controller from "../../controllers/admin/bus.controller"; 


router.get("/get", controller.get);


router.get("/get/:id", controller.getById);

router.post(
  "/create",
  validate.create, 
  controller.create
);


router.patch(
  "/update/:id",
  validate.update, 
  controller.update
);

router.delete("/delete/:id", controller.del);

export default router;
