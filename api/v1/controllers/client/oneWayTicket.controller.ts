import { Request, Response } from "express";

import oneWayTicketService from "../../services/admin/oneWayTicket.service";

// [POST] /api/v1/oneWayTickets/create
const create = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const newOneWayTicket = await oneWayTicketService.create({});
    return res.json({
      code: 201,
      message: "One way ticket was created successfully.",
      data: newOneWayTicket
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const oneWayTicketController = { create };
export default oneWayTicketController;