import express from "express"

import busRouteController from "../../controllers/admin/busRoutes.controller";
import busRouteValidation from "../../validates/admin/busRoute.validate";

const Router = express.Router();
Router.post('/create', busRouteValidation.create, busRouteController.create)
Router.get("/get", busRouteController.getAll);
Router.get("/get/:id", busRouteController.getById);
Router.patch("/update/:id", busRouteValidation.create, busRouteController.update)
Router.delete("/delete/:id", busRouteController.del)
export  const busRoute = Router
