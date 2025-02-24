import express, { Router } from "express";
const router: Router = express.Router();

import controller from "../../controllers/client/busRouteDetail.controller";

router.get("/get", controller.get);
router.get("/get-busRouteId/:busRouteId", controller.getByBusRouteId);
router.get("/get/:id", controller.getById);

export default router;