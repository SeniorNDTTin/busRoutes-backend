import { NextFunction, Request, Response } from "express";

// [POST] /api/v1/admin/buses/create
const create = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { busId, licensePlate, chairQuantity } = req.body;

    // Kiểm tra busId (required và kiểu dữ liệu là string)
    if (!busId) {
      return res.json({
        code: 400,
        message: "Missing required field: busId."
      });
    }

    if (typeof busId !== "string") {
      return res.json({
        code: 400,
        message: "busId must be a string."
      });
    }

    // Kiểm tra licensePlate (optional và kiểu dữ liệu là string)
    if (licensePlate && typeof licensePlate !== "string") {
      return res.json({
        code: 400,
        message: "licensePlate must be a string."
      });
    }

    // Kiểm tra chairQuantity (optional và kiểu dữ liệu là number)
    if (chairQuantity && typeof chairQuantity !== "number") {
      return res.json({
        code: 400,
        message: "chairQuantity must be a number."
      });
    }

    return next();
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [PATCH] /api/v1/admin/buses/update/:id
const update = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { busId, licensePlate, chairQuantity } = req.body;

    // Kiểm tra busId (required và kiểu dữ liệu là string)
    if (busId && typeof busId !== "string") {
      return res.json({
        code: 400,
        message: "busId must be a string."
      });
    }

    // Kiểm tra licensePlate (optional và kiểu dữ liệu là string)
    if (licensePlate && typeof licensePlate !== "string") {
      return res.json({
        code: 400,
        message: "licensePlate must be a string."
      });
    }

    // Kiểm tra chairQuantity (optional và kiểu dữ liệu là number)
    if (chairQuantity && typeof chairQuantity !== "number") {
      return res.json({
        code: 400,
        message: "chairQuantity must be a number."
      });
    }

    return next();
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const busValidate = {
  create,
  update
};

export default busValidate;
