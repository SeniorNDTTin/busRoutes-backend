import express from "express";
const router = express.Router();

import validate from "../../validates/admin/address.validate";
import controller from "../../controllers/admin/address.controller";

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