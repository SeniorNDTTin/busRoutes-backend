import { Request, Response } from "express";

import monthTicketService from "../../services/admin/monthTicket.service";
import customerService from "../../services/admin/customer.service";

// [GET] /api/v1/admin/monthTickets/get
const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const monthTickets = await monthTicketService.find(req);
    return res.json({
      code: 200,
      message: "Month tickets found.",
      data: monthTickets
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /api/v1/admin/monthTickets/get/:id
const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const monthTicketExists = await monthTicketService.findById(id);
    if (!monthTicketExists) {
      return res.json({
        code: 404,
        message: "Month ticket id not found."
      });
    }

    return res.json({
      code: 200,
      message: "Month ticket found.",
      data: monthTicketExists
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [POST] /api/v1/admin/monthTickets/create
const create = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const registerDate: string = req.body.registerDate;
    const expiredDate: string = req.body.expiredDate;
    const expired: boolean = req.body.expired;
    const customerId: string = req.body.customerId;

    const customerExists = await customerService.findById(customerId);
    if (!customerExists) {
      return res.json({
        code: 404,
        message: "Customer id not found."
      });
    }

    const newMonthTicket = await monthTicketService.create({
      registerDate,
      expiredDate,
      expired,
      customerId
    });
    return res.json({
      code: 201,
      message: "Customer was created successfully.",
      data: newMonthTicket
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [PATCH] /api/v1/admin/monthTickets/create
const update = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const registerDate: string = req.body.registerDate;
    const expiredDate: string = req.body.expiredDate;
    const expired: boolean = req.body.expired;
    const customerId: string = req.body.customerId;

    const [
      monthTicketExists,
      customerExists
    ] = await Promise.all([
      monthTicketService.findById(id),
      customerService.findById(customerId)
    ]);
    if (!monthTicketExists) {
      return res.json({
        code: 404,
        message: "Month ticket id not found."
      });
    }
    if (!customerExists) {
      return res.json({
        code: 404,
        message: "Customer id not found."
      });
    }

    const newMonthTicket = await monthTicketService.update(id, {
      registerDate,
      expiredDate,
      expired,
      customerId
    });
    return res.json({
      code: 200,
      message: "Customer was updated successfully.",
      data: newMonthTicket
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [DELETE] /api/v1/admin/monthTickets/delete/:id
const del = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const monthTicketExists = await monthTicketService.findById(id);
    if (!monthTicketExists) {
      return res.json({
        code: 404,
        message: "Month ticket id not found."
      });
    }

    await monthTicketService.del(id);
    return res.json({
      code: 200,
      message: "Month ticket was deleted successfully."
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const monthTicketController = {
  get,
  getById,
  create,
  update,
  del
};
export default monthTicketController;