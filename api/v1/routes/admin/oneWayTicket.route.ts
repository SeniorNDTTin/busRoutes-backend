import express, {Router} from "express";
const router: Router = express.Router();

import validate from "../../validates/admin/oneWayTicket.validate";
import controller from "../../controllers/admin/oneWayTicket.controller";

router.get("/get", controller.get);
router.get("/get/:id", controller.getById);

router.post(
  "/create",
  validate.create,
  controller.create
);

router.delete("/delete/:id", controller.del);

export default router;