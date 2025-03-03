import { Request, Response } from "express";

import oneWayTicketService from "../../services/admin/oneWayTicket.service";

// [GET] /api/v1/admin/oneWayTickets/get
const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const oneWayTickets = await oneWayTicketService.find(req);
    return res.json({
      code: 200,
      message: "One way tickets found.",
      data: oneWayTickets
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /api/v1/admin/oneWayTickets/get/:id
const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const oneWayTicketExists = await oneWayTicketService.findById(id);
    if (!oneWayTicketExists) {
      return res.json({
        code: 404,
        message: "One way ticket id not found."
      });
    }

    return res.json({
      code: 200,
      message: "One way ticket found.",
      data: oneWayTicketExists
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [POST] /api/v1/admin/oneWayTickets/create
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

// [DELETE] /api/v1/admin/oneWayTickets/delete/:id
const del = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const oneWayTicketExists = await oneWayTicketService.findById(id);
    if (!oneWayTicketExists) {
      return res.json({
        code: 404,
        message: "One way ticket id not found."
      });
    }

    await oneWayTicketService.del(id);
    return res.json({
      code: 200,
      message: "One way ticket was deleted successfully."
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const oneWayTicketController = {
  get,
  getById,
  create,
  del
};
export default oneWayTicketController;