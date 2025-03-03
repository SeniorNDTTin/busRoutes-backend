import { NextFunction, Request, Response } from "express";

// [POST] /api/v1/oneWayTickets/create
const create = (req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> => {
  try {
    return next();
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const oneWayTicketValidate = { create };
export default oneWayTicketValidate;