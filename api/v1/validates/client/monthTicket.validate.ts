import { NextFunction, Request, Response } from "express";

// [POST] /api/v1/monthTickets/create
const create = (req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> => {
  try {
    const registerDate = req.body.registerDate;
    const expiredDate = req.body.expiredDate;
    const expired = req.body.expired;
    const customerId = req.body.customerId;

    if (
      registerDate === undefined ||
      expiredDate === undefined ||
      expired === undefined ||
      customerId === undefined
    ) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (
      typeof registerDate !== "string" ||
      typeof expiredDate !== "string" ||
      typeof expired !== "boolean" ||
      typeof customerId !== "string"
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

const monthTicketValidate = {
  create
};
export default monthTicketValidate;