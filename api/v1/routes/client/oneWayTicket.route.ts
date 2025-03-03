import express, {Router} from "express";
const router: Router = express.Router();

import validate from "../../validates/client/oneWayTicket.validate";
import controller from "../../controllers/client/oneWayTicket.controller";

router.post(
  "/create",
  validate.create,
  controller.create
);

export default router;