import { Request, Response } from "express";

import monthTicketService from "../../services/admin/monthTicket.service";
import customerService from "../../services/admin/customer.service";

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

const monthTicketController = {
  create
};
export default monthTicketController;