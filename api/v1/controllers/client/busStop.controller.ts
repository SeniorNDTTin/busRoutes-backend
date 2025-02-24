import { Request, Response } from "express";

import busStopService from "../../services/client/busStop.service";

// [GET] /api/v1/busStops/get
const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const busStops = await busStopService.find();
    return res.json({
      code: 200,
      message: "Bus stops found.",
      data: busStops
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    })
  }
}

// [GET] /api/v1/busStops/get/:id
const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const busStopExists = await busStopService.findById(id);
    if (!busStopExists) {
      return res.json({
        code: 404,
        message: "Bus stop id not found."
      });
    }

    return res.json({
      code: 200,
      message: "Bus route found.",
      data: busStopExists
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    })
  }
}

const busStopController = {
  get,
  getById
};
export default busStopController;