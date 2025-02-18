import { Request, Response } from "express";

import busRoutesService from "../../services/admin/busRoute.service";

const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const busRoutes = await busRoutesService.find(req);
    return res.json({
      status: 200,
      message: "Bus routes found.",
      data: busRoutes
    });
  } catch {
    return res.json({
      status: 500,
      message: "Something went wrong."
    });
  }
}

const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const busRouteExists = await busRoutesService.findById(id);
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
    });
  }
}

const create = async (req: Request, res: Response) => {
  try {
    const name: string = req.body.name;
    const fullDistance: number = req.body.fullDistance;
    const fullPrice: number = req.body.fullPrice;
    const time: string = req.body.time;
    const firstFlightStartTime: string = req.body.firstFlightStartTime;
    const lastFlightStartTime: string = req.body.lastFlightStartTime;
    const timeBetweenTwoFlight: string = req.body.timeBetweenTwoFlight;

    const newBusRoute = await busRoutesService.create({
      name,
      fullDistance,
      fullPrice,
      time,
      firstFlightStartTime,
      lastFlightStartTime,
      timeBetweenTwoFlight
    });
    return res.json({
      code: 201,
      message: "Bus route was created successfully.",
      data: newBusRoute
    });
  } catch {
    return res.json({
      status: 500,
      message: "Something went wrong."
    });
  }
}

const update = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    const name: string = req.body.name;
    const fullDistance: number = req.body.fullDistance;
    const fullPrice: number = req.body.fullPrice;
    const time: string = req.body.time;
    const firstFlightStartTime: string = req.body.firstFlightStartTime;
    const lastFlightStartTime: string = req.body.lastFlightStartTime;
    const timeBetweenTwoFlight: string = req.body.timeBetweenTwoFlight;

    const busRouteExists = await busRoutesService.findById(id);
    if (!busRouteExists) {
      return res.json({
        code: 404,
        message: "Bus route id not found."
      });
    }

    const newBusRoute = await busRoutesService.update(id, {
      name,
      fullDistance,
      fullPrice,
      time,
      firstFlightStartTime,
      lastFlightStartTime,
      timeBetweenTwoFlight
    });
    return res.json({
      code: 200,
      message: "Bus route was updated successfully.",
      data: newBusRoute
    });
  } catch {
    return res.json({
      status: 500,
      message: "Something went wrong."
    });
  }
}

const del = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const busRouteExists = await busRoutesService.findById(id);
    if (!busRouteExists) {
      return res.json({
        code: 404,
        message: "Bus route id not found."
      });
    }

    await busRoutesService.del(id);
    return res.json({
      code: 200,
      messge: "Bus route was deleted successfully."
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}
const busRouteController = {
  get,
  getById,
  create,
  update,
  del
}
export default busRouteController

