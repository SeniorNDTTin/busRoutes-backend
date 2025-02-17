import express, { Router } from "express";
const router: Router = express.Router();

import validate from "../../validates/admin/bus.validate"; // Giả sử bạn có validate cho bus
import controller from "../../controllers/admin/bus.controller"; // Đảm bảo controller cho bus đã có

// Lấy danh sách tất cả các bus
router.get("/get", controller.get);

// Lấy chi tiết của một bus theo busId
router.get("/get/:id", controller.getById);

// Tạo mới một bus
router.post(
  "/create",
  validate.create, // Giả sử có validation cho việc tạo mới bus
  controller.create
);

// Cập nhật thông tin bus theo busId
router.patch(
  "/update/:id",
  validate.update, // Giả sử có validation cho việc cập nhật bus
  controller.update
);

// Xóa một bus theo busId
router.delete("/delete/:id", controller.del);

export default router;
