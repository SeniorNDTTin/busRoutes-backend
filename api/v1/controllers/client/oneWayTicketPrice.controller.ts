import { Request, Response } from "express";

import oneWayTicketPriceService from "../../services/client/oneWayTicketPrice.service";
import busRoutesService from "../../services/client/busRoute.service";

// [GET] /api/v1/client/oneWayTicketPrices/get
const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const oneWayTicketPrices = await oneWayTicketPriceService.find(req);
    return res.json({
      code: 200,
      message: "One way ticket prices found.",
      data: oneWayTicketPrices
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /api/v1/client/oneWayTicketPrices/get/:id
const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const oneWayTicketPriceExists = await oneWayTicketPriceService.findById(id);
    if (!oneWayTicketPriceExists) {
      return res.json({
        code: 404,
        message: "One way ticket price id not found."
      });
    }

    return res.json({
      code: 200,
      message: "One way ticket price found.",
      data: oneWayTicketPriceExists
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