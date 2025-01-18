import { NextFunction, Request, Response } from "express";

// [POST] /admin/addresses/create
const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const street = req.body.street;
    const ward = req.body.ward;
    const district = req.body.district;

    if (
      !street ||
      !ward ||
      !district
    ) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (
      typeof street !== "string" ||
      typeof ward !== "string" ||
      typeof district !== "string"
    ) {
      return res.json({
        code: 400,
        message: "Missing datatype."
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

// [PATCH] /admin/addresses/update/:id
const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const street = req.body.street;
    const ward = req.body.ward;
    const district = req.body.district;

    if (
      !street &&
      !ward &&
      !district
    ) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (
      (street && typeof street !== "string") ||
      (ward && typeof ward !== "string") ||
      (district && typeof district !== "string")
    ) {
      return res.json({
        code: 400,
        message: "Missing datatype."
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

const addressValidate = {
  create,
  update
};
export default addressValidate;