import { NextFunction, Request, Response } from "express";

// [POST] /api/v1/admin/schedules/create
const create = (req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> => {
  try {
    const timeStart = req.body.timeStart;
    const timeEnd = req.body.timeEnd;
    const busId = req.body.busId;
    const busRouteId = req.body.busRouteId;

    if (
      !timeStart ||
      !timeEnd ||
      !busId ||
      !busRouteId
    ) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (
      typeof timeStart !== "string" ||
      typeof timeEnd !== "string" ||
      typeof busId !== "string" ||
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

// [PATCH] /api/v1/admin/schedules/update/:id
const update = (req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> => {
  try {
    const timeStart = req.body.timeStart;
    const timeEnd = req.body.timeEnd;
    const busId = req.body.busId;
    const busRouteId = req.body.busRouteId;

    if (
      !timeStart &&
      !timeEnd &&
      !busId &&
      !busRouteId
    ) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (
      (timeStart && typeof timeStart !== "string") ||
      (timeEnd && typeof timeEnd !== "string") ||
      (busId && typeof busId !== "string") ||
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

const scheduleValidate = {
  create,
  update
};
export default scheduleValidate;