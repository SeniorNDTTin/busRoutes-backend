import { NextFunction, Request, Response } from "express";

// [POST] /api/v1/admin/districts/create
const create = (req: Request, res: Response, next: NextFunction) => {
  try {
    const name = req.body.name;

    if (!name) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (typeof name !== "string") {
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

// [PATCH] /api/v1/admin/districts/update/:id
const update = (req: Request, res: Response, next: NextFunction) => {
  try {
    const name = req.body.name;

    if (!name) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (typeof name !== "string") {
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

const districtValidate = {
  create,
  update
};
export default districtValidate;