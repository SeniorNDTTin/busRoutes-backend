import { Request, Response } from "express";

import monthTicketPriceService from "../../services/client/monthTicketPrice.service";
import busRoutesService from "../../services/client/busRoute.service";

// [GET] /api/v1/admin/monthTicketPrices/get
const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const monthTicketPrices = await monthTicketPriceService.find(req);
    return res.json({
      code: 200,
      message: "Month ticket prices found.",
      data: monthTicketPrices
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /api/v1/admin/monthTicketPrices/get/:id
const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const monthTicketPriceExists = await monthTicketPriceService.findById(id);
    if (!monthTicketPriceExists) {
      return res.json({
        code: 404,
        message: "Month ticket price id not found."
      });
    }

    return res.json({
      code: 200,
      message: "Month ticket price found.",
      data: monthTicketPriceExists
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const oneWayTicketPriceController = {
  get,
  getById
};
export default oneWayTicketPriceController;