import express, {Router} from "express";
const router: Router = express.Router();

import controller from "../../controllers/client/monthTicketPrice.controller";

router.get("/get", controller.get);
router.get("/get/:id", controller.getById);

export default router;