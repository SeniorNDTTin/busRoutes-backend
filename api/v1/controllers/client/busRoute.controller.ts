import { Request, Response } from "express";

import busRouteService from "../../services/client/busRoute.service";

// [GET] /api/v1/busRoutes/get
const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const busRoutes = await busRouteService.find();
    return res.json({
      code: 200,
      message: "Bus routes found.",
      data: busRoutes
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    })
  }
}

// [GET] /api/v1/busRoutes/get/:id
const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const busRouteExists = await busRouteService.findById(id);
    if (!busRouteExists) {
      return res.json({
        code: 404,
        message: "Bus route id not found."
      });
    }

    return res.json({
      code: 200,
      message: "Bus route found.",
      data: busRouteExists
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    })
  }
}

const busRouteController = {
  get,
  getById
};
export default busRouteController;