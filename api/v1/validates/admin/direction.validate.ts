import { NextFunction, Request, Response } from "express";

// [POST] /api/v1/admin/directions/create
const create = (req: Request, res: Response, next: NextFunction): void | Response<Record<string, any>> => {
  try {
    const description = req.body.description;

    if (!description) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (typeof description !== "string") {
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

// [PATCH] /api/v1/admin/directions/update/:id
const update = (req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> => {
  try {
    const description = req.body.description;

    if (!description) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (typeof description !== "string") {
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

const directionValidate = {
  create,
  update
};
export default directionValidate;