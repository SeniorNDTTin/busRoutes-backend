import { Request, Response } from "express";

import busRouteDetailService from "../../services/client/busRouteDetail.service";

// [GET] /api/v1/busRouteDetails/get
const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const busRouteDetails = await busRouteDetailService.find();
    return res.json({
      code: 200,
      message: "Bus route details found.",
      data: busRouteDetails
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /api/v1/busRouteDetails/get-busRouteId/:id
const getByBusRouteId = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const busRouteId: string = req.params.busRouteId;

    const busRouteDetails = await busRouteDetailService.findByBusRouteId(busRouteId);
    return res.json({
      code: 200,
      message: "Bus route details found.",
      data: busRouteDetails
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /api/v1/busRouteDetails/get/:id
const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const busRouteDetailExists = await busRouteDetailService.findById(id);
    if (!busRouteDetailExists) {
      return res.json({
        code: 404,
        message: "Bus route detail id not found."
      });
    }

    return res.json({
      code: 200,
      message: "Bus route detail found.",
      data: busRouteDetailExists
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const busRouteDetailController = {
  get,
  getByBusRouteId,
  getById
};
export default busRouteDetailController;