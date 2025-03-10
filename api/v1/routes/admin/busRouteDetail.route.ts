import express, { Router } from "express";
const router: Router = express.Router();

import validate from "../../validates/admin/busRouteDetail.validate";
import controller from "../../controllers/admin/busRouteDetail.controller"; 

router.get("/get", controller.get);
router.get("/get/:id", controller.getById);
router.get("/getRoute/:id", controller.getByRouteId);

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
