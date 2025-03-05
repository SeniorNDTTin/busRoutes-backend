import express, { Router } from "express";
const router: Router = express.Router();

import validate from "../../validates/admin/schedule.validate";
import controller from "../../controllers/admin/schedule.controller"; 

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

router.get("/busRoute/:busRouteId", controller.getSchedulesByBusRoute);

export default router;
