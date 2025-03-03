import { NextFunction, Request, Response } from "express";

// [POST] /api/v1/customers/create
const create = (req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> => {
  try {
    const fullName = req.body.fullName;
    const phone = req.body.phone;
    const email = req.body.email;

    if (
      !fullName ||
      !phone ||
      !email
    ) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (
      typeof fullName !== "string" ||
      typeof phone !== "string" ||
      typeof email !== "string"
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

const customerValidate = {
  create
};
export default customerValidate;