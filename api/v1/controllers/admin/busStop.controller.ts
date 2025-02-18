import { Request, Response } from "express";

import busStopService from "../../services/admin/busStop.service";
import streetService from "../../services/admin/street.service";

// [GET] /api/v1/admin/busStops/get
const get = async (req: Request, res: Response) => {
  try {
    const busStops = await busStopService.find(req);
    return res.json({
      code: 200,
      message: "Bus stops found.",
      data: busStops
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /api/v1/admin/busStops/get/:id
const getById = async (req: Request, res: Response) => {
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
      message: "Bus stop found.",
      data: busStopExists
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [POST] /api/v1/admin/busStops/create
const create = async (req: Request, res: Response) => {
  try {
    const longitude: number = req.body.longitude;
    const latitude: number = req.body.latitude;
    const streetId: string = req.body.streetId;

    const streetExists = await streetService.findById(streetId);
    if (!streetExists) {
      return res.json({
        code: 404,
        message: "Street id not found."
      });
    }

    const newBusStop = await busStopService.create({ longitude, latitude, streetId });
    return res.json({
      code: 201,
      message: "Bus stop was created successfully.",
      data: newBusStop
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [PATCH] /api/v1/admin/busStops/update/:id
const update = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    const longitude: number = req.body.longitude;
    const latitude: number = req.body.latitude;
    const streetId: string = req.body.streetId;

    const [
      busStopExists,
      streetExists
    ] = await Promise.all([
      busStopService.findById(id),
      streetService.findById(streetId)
    ]);
    if (!busStopExists) {
      return res.json({
        code: 404,
        message: "Bus stop id not found."
      });
    }
    if (streetId && !streetExists) {
      return res.json({
        code: 404,
        message: "Street id not found."
      });
    }

    const newBusStop = await busStopService.create({ longitude, latitude, streetId });
    return res.json({
      code: 200,
      message: "Bus stop was updated successfully.",
      data: newBusStop
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [DELETE] /api/v1/admin/busStops/delete/:id
const del = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    const busStopExists = await busStopService.findById(id);
    if (!busStopExists) {
      return res.json({
        code: 404,
        message: "Bus stop id not found."
      });
    }

    await busStopService.del(id);
    return res.json({
      code: 200,
      message: "Bus stop was deleted successfully."
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const busStopController = {
  get,
  getById,
  create,
  update,
  del
};
export default busStopController;