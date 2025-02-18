import { Request, Response } from "express";

import oneWayTicketPriceService from "../../services/admin/oneWayTicketPrice.service";
import busRoutesService from "../../services/admin/busRoute.service";

// [GET] /api/v1/admin/oneWayTicketPrices/get
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

// [GET] /api/v1/admin/oneWayTicketPrices/get/:id
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

// [POST] /api/v1/admin/oneWayTicketPrices/create
const create = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const maxKilometer: number = req.body.maxKilometer;
    const unitPrice: number = req.body.unitPrice;
    const busRouteId: string = req.body.busRouteId;

    const busRouteExists = await busRoutesService.findById(busRouteId);
    if (!busRouteExists) {
      return res.json({
        code: 404,
        message: "Bus route id not found."
      });
    }

    const newOneWayTicketPrice = await oneWayTicketPriceService.create({
      maxKilometer,
      unitPrice,
      busRouteId
    });
    return res.json({
      code: 201,
      message: "One way ticket price was created successfully.",
      data: newOneWayTicketPrice
    });
  } catch(e) {
    console.log(e);
    
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [PATCH] /api/v1/admin/oneWayTicketPrices/update/:id
const update = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const maxKilometer: number = req.body.maxKilometer;
    const unitPrice: number = req.body.unitPrice;
    const busRouteId: string = req.body.busRouteId;

    const [
      oneWayTicketPriceExists,
      busRouteExists
    ] = await Promise.all([
      oneWayTicketPriceService.findById(id),
      busRoutesService.findById(busRouteId)
    ]);
    if (!oneWayTicketPriceExists) {
      return res.json({
        code: 404,
        message: "One way ticket price id not found."
      });
    }
    if (!busRouteExists) {
      return res.json({
        code: 404,
        message: "Bus route id not found."
      });
    }

    const newOneWayTicketPrice = await oneWayTicketPriceService.update(id, {
      maxKilometer,
      unitPrice,
      busRouteId
    });
    return res.json({
      code: 200,
      message: "One way ticket price was updated successfully.",
      data: newOneWayTicketPrice
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [DELETE] /api/v1/admin/oneWayTicketPrices/delete/:id
const del = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const oneWayTicketPriceExists = await oneWayTicketPriceService.findById(id);
    if (!oneWayTicketPriceExists) {
      return res.json({
        code: 404,
        message: "One way ticket price id not found."
      });
    }

    await oneWayTicketPriceService.del(id);
    return res.json({
      code: 200,
      message: "One way ticket price was deleted successfully."
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