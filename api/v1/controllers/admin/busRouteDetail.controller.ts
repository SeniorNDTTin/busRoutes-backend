import { Request, Response } from "express";

import busRouteDetailService from "../../services/admin/busRouteDetail.service";
import busRoutesService from "../../services/admin/busRoute.service";
import directionService from "../../services/admin/direction.service";
import busStopService from "../../services/admin/busStop.service";

// [GET] /api/v1/admin/busRouteDetails/get
const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const busRouteDetails = await busRouteDetailService.find(req);
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
//[GET]  /api/v1/admin/busRouteDetails/getRoute/67bd84115a02988ad22f5692
const getByRouteId = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id : string = req.params.id;

    const busRouteDetails = await busRouteDetailService.findByRouteId(id);
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

// [GET] /api/v1/admin/busRouteDetails/get/:id
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

// [POST] /api/v1/admin/busRouteDetails/create
const create = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const orderNumber: number = req.body.orderNumber;
    const distancePre: number = req.body.distancePre;
    const busRouteId: string = req.body.busRouteId;
    const busStopId: string = req.body.busStopId;
    const directionId: string = req.body.directionId;

    const [
      busRouteExists,
      busStopExists,
      directionExists
    ] = await Promise.all([
      busRoutesService.findById(busRouteId),
      busStopService.findById(busStopId),
      directionService.findById(directionId)
    ]);
    if (!busRouteExists) {
      return res.json({
        code: 404,
        message: "Bus route id not found."
      });
    }
    if (!busStopExists) {
      return res.json({
        code: 404,
        message: "Bus stop id not found."
      });
    }
    if (!directionExists) {
      return res.json({
        code: 404,
        message: "Direction id not found."
      });
    }

    const newBusRouteDetail = await busRouteDetailService.create({
      orderNumber,
      distancePre,
      busRouteId,
      busStopId,
      directionId
    });
    return res.json({
      code: 201,
      message: "Bus route detail was created successfully.",
      data: newBusRouteDetail
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [PATCH] /api/v1/admin/busRouteDetails/update/:id
const update = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const orderNumber: number = req.body.orderNumber;
    const distancePre: number = req.body.distancePre;
    const busRouteId: string = req.body.busRouteId;
    const busStopId: string = req.body.busStopId;
    const directionId: string = req.body.directionId;

    const [
      busRouteDetailExists,
      busRouteExists,
      busStopExists,
      directionExists
    ] = await Promise.all([
      busRouteDetailService.findById(id),
      busRoutesService.findById(busRouteId),
      busStopService.findById(busStopId),
      directionService.findById(directionId)
    ]);
    if (!busRouteDetailExists) {
      return res.json({
        code: 404,
        message: "Bus route detail id not found."
      });
    }
    if (!busRouteExists) {
      return res.json({
        code: 404,
        message: "Bus route id not found."
      });
    }
    if (!busStopExists) {
      return res.json({
        code: 404,
        message: "Bus stop id not found."
      });
    }
    if (!directionExists) {
      return res.json({
        code: 404,
        message: "Direction id not found."
      });
    }

    const newBusRouteDetail = await busRouteDetailService.update(id, {
      orderNumber,
      distancePre,
      busRouteId,
      busStopId,
      directionId
    });
    return res.json({
      code: 200,
      message: "Bus route detail was updated successfully.",
      data: newBusRouteDetail
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [DELETE] /api/v1/admin/busRouteDetails/delete/:id
const del = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const busRouteDetailExists = await busRouteDetailService.findById(id);
    if (!busRouteDetailExists) {
      return res.json({
        code: 404,
        message: "Bus route detail id not found."
      });
    }

    await busRouteDetailService.del(id);
    return res.json({
      code: 200,
      message: "Bus route detail was deleted successfully"
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
  getById,
  getByRouteId,
  create,
  update,
  del
};
export default busRouteDetailController;