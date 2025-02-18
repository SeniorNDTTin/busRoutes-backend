import { NextFunction, Request, Response } from "express";

// [POST] /api/v1/admin/busRoutes/create
const create = (req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> => {
  try {
    const maxKilometer = req.body.maxKilometer;
    const unitPrice = req.body.unitPrice;
    const busRouteId = req.body.busRouteId;

    if (
      !maxKilometer ||
      !unitPrice ||
      !busRouteId
    ) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (
      typeof maxKilometer !== "number" ||
      typeof unitPrice !== "number" ||
      typeof busRouteId !== "string" 
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

// [PATCH] /api/v1/admin/busRoutes/update/:id
const update = (req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> => {
  try {
    const maxKilometer = req.body.maxKilometer;
    const unitPrice = req.body.unitPrice;
    const busRouteId = req.body.busRouteId;

    if (
      !maxKilometer &&
      !unitPrice &&
      !busRouteId
    ) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (
      (maxKilometer && typeof maxKilometer !== "number") ||
      (unitPrice && typeof unitPrice !== "number") ||
      (busRouteId && typeof busRouteId !== "string")
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

const busRouteValidate = {
  create,
  update
};
export default busRouteValidate;