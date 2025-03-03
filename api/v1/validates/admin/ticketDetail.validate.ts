import { NextFunction, Request, Response } from "express";

import { ETicketDetailType } from "../../../../enums/ticketDetail.enum";

// [POST] /api/v1/admin/ticketDetails/create
const create = (req: Request, res: Response, next: NextFunction) => {
  try {
    const type = req.body.type;
    const date = req.body.date;
    const ticketId = req.body.ticketId;
    const scheduleId = req.body.scheduleId;

    if (
      !type ||
      !date ||
      !ticketId ||
      !scheduleId
    ) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (
      typeof type !== "string" ||
      typeof date !== "string" ||
      typeof ticketId !== "string" ||
      typeof scheduleId !== "string"
    ) {
      return res.json({
        code: 400,
        message: "Missing datatype."
      });
    }

    if (!Object.values(ETicketDetailType).includes(type as ETicketDetailType)) {
      return res.json({
        code: 400,
        message: "Type was incorrect."
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

// [PATCH] /api/v1/admin/ticketDetails/update/:id
const update = (req: Request, res: Response, next: NextFunction) => {
  try {
    const type = req.body.type;
    const date = req.body.date;
    const ticketId = req.body.ticketId;
    const scheduleId = req.body.scheduleId;

    if (
      !type &&
      !date &&
      !ticketId &&
      !scheduleId
    ) {
      return res.json({
        code: 400,
        message: "Missing required information."
      });
    }

    if (
      (type && typeof type !== "string") ||
      (date && typeof date !== "string") ||
      (ticketId && typeof ticketId !== "string") ||
      (scheduleId && typeof scheduleId !== "string")
    ) {
      return res.json({
        code: 400,
        message: "Missing datatype."
      });
    }

    if (
      type &&
      !Object.values(ETicketDetailType).includes(type as ETicketDetailType)
    ) {
      return res.json({
        code: 400,
        message: "Type was incorrect."
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

const ticketDetailValidate = {
  create,
  update
};
export default ticketDetailValidate;