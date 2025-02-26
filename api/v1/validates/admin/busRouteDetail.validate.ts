import { NextFunction, Request, Response } from "express";

// [POST] /api/v1/admin/busRouteDetails/create
const create = (req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> => {
  try {
    const orderNumber = req.body.orderNumber;
    const distancePre = req.body.distancePre;
    const busRouteId = req.body.busRouteId;
    const busStopId = req.body.busStopId;
    const directionId = req.body.directionId;

    if (
      !orderNumber ||
      // !distancePre ||
      !busRouteId ||
      !busStopId ||
      !directionId
    ) {
      return res.json({
        code: 400,
        messgae: "Missing required information."
      });
    }

    if (
      typeof orderNumber !== "number" ||
      typeof distancePre !== "number" ||
      typeof busRouteId !== "string" ||
      typeof busStopId !== "string" ||
      typeof directionId !== "string"
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

// [PATCH] /api/v1/admin/busRouteDetails/update/:id
const update = (req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> => {
  try {
    const orderNumber = req.body.orderNumber;
    const distancePre = req.body.distancePre;
    const busRouteId = req.body.busRouteId;
    const busStopId = req.body.busStopId;
    const directionId = req.body.directionId;

    if (
      !orderNumber &&
      !distancePre &&
      !busRouteId &&
      !busStopId &&
      !directionId
    ) {
      return res.json({
        code: 400,
        messgae: "Missing required information."
      });
    }

    if (
      (orderNumber && typeof orderNumber !== "number") ||
      (distancePre && typeof distancePre !== "number") ||
      (busRouteId && typeof busRouteId !== "string") ||
      (busStopId && typeof busStopId !== "string") ||
      (directionId && typeof directionId !== "string")
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

const busRouteDetailValidate = {
  create,
  update
};
export default busRouteDetailValidate;