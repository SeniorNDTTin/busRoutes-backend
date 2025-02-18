import { NextFunction, Request, Response } from "express";

// [POST] /api/v1/admin/busStops/create
const create = (req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> => {
  try {
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;
    const streetId = req.body.streetId;

    if (
      !longitude ||
      !latitude ||
      !streetId
    ) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (
      typeof longitude !== "number" ||
      typeof latitude !== "number" ||
      typeof streetId !== "string"
    ) {
      return res.json({
        code: 400,
        message: "Missing dataype."
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

// [PATCH] /api/v1/admin/busStops/create
const update = (req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> => {
  try {
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;
    const streetId = req.body.streetId;

    if (
      !longitude &&
      !latitude &&
      !streetId
    ) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (
      (longitude && typeof longitude !== "number") ||
      (latitude && typeof latitude !== "number") ||
      (streetId && typeof streetId !== "string")
    ) {
      return res.json({
        code: 400,
        message: "Missing dataype."
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

const busStopValidate = {
  create,
  update
};
export default busStopValidate;