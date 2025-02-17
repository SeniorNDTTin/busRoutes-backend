import { NextFunction, Request, Response } from "express";

// [POST] /api/v1/admin/wards/create
const create = (req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> => {
  try {
    const name: string = req.body.name;
    const districtId: string = req.body.districtId;

    if (
      !name ||
      !districtId
    ) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (
      typeof name !== "string" ||
      typeof districtId !== "string"
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

// [POST] /api/v1/admin/wards/update/:id
const update = (req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> => {
  try {
    const name: string = req.body.name;
    const districtId: string = req.body.districtId;

    if (
      !name &&
      !districtId
    ) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (
      (name && typeof name !== "string") ||
      (districtId && typeof districtId !== "string")
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

const wardValidate = {
  create,
  update
};
export default wardValidate;