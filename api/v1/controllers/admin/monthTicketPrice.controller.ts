import { Request, Response } from "express";

import monthTicketPriceService from "../../services/admin/monthTicketPrice.service";
import busRoutesService from "../../services/admin/busRoute.service";

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

// [POST] /api/v1/admin/monthTicketPrices/create
const create = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const timeStart: string = req.body.timeStart;
    const timeEnd: string = req.body.timeEnd;
    const price: number = req.body.price;
    const busRouteId: string = req.body.busRouteId;

    const busRouteExists = await busRoutesService.findById(busRouteId);
    if (!busRouteExists) {
      return res.json({
        code: 404,
        message: "Bus route id not found."
      });
    }

    const newMonthTicketPrice = await monthTicketPriceService.create({
      timeStart,
      timeEnd,
      price,
      busRouteId
    });
    return res.json({
      code: 201,
      message: "Month ticket price was created successfully.",
      data: newMonthTicketPrice
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [PATCH] /api/v1/admin/monthTicketPrices/update/:id
const update = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const timeStart: string = req.body.timeStart;
    const timeEnd: string = req.body.timeEnd;
    const price: number = req.body.price;
    const busRouteId: string = req.body.busRouteId;

    const [
      monthTicketPriceExists,
      busRouteExists
    ] = await Promise.all([
      monthTicketPriceService.findById(id),
      busRoutesService.findById(busRouteId)
    ]);
    if (!monthTicketPriceExists) {
      return res.json({
        code: 404,
        message: "Month ticket price id not found."
      });
    }
    if (!busRouteExists) {
      return res.json({
        code: 404,
        message: "Bus route id not found."
      });
    }

    const newMonthTicketPrice = await monthTicketPriceService.update(id, {
      timeStart,
      timeEnd,
      price,
      busRouteId
    });
    return res.json({
      code: 200,
      message: "Month ticket price was updated successfully.",
      data: newMonthTicketPrice
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [DELETE] /api/v1/admin/monthTicketPrices/delete/:id
const del = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const monthTicketPriceExists = await monthTicketPriceService.findById(id);
    if (!monthTicketPriceExists) {
      return res.json({
        code: 404,
        message: "One way ticket price id not found."
      });
    }

    await monthTicketPriceService.del(id);
    return res.json({
      code: 200,
      message: "Month ticket price was deleted successfully."
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
  getById,
  create,
  update,
  del
};
export default oneWayTicketPriceController;