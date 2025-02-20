import { Request, Response } from "express";

import scheduleService from "../../services/admin/schedule.service";
import busService from "../../services/admin/bus.service";
import busRoutesService from "../../services/admin/busRoute.service";

// [GET] /api/v1/admin/schedules/get
const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const schedules = await scheduleService.find(req);
    return res.json({
      code: 200,
      message: "Schedules found.",
      data: schedules
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /api/v1/admin/schedules/get/:id
const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>>  => {
  try {
    const id: string = req.params.id;

    const scheduleExists = await scheduleService.findById(id);
    if (!scheduleExists) {
      return res.json({
        code: 404,
        message: "Schedule id not found."
      });
    }

    return res.json({
      code: 200,
      message: "Schedule found.",
      schedule: scheduleExists
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [POST] /api/v1/admin/schedules/create
const create = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>>  => {
  try {
    const timeStart: string = req.body.timeStart;
    const timeEnd: string = req.body.timeEnd;
    const busId: string = req.body.busId;
    const busRouteId: string = req.body.busRouteId;

    const [
      busExists,
      busRouteExists
    ] = await Promise.all([
      busService.findById(busId),
      busRoutesService.findById(busRouteId)
    ]);
    if (!busExists) {
      return res.json({
        code: 404,
        message: "Bus id not found."
      });
    }
    if (!busRouteExists) {
      return res.json({
        code: 404,
        message: "Bus route id not found."
      });
    }

    const newSchedule = await scheduleService.create({
      timeStart,
      timeEnd,
      busId,
      busRouteId
    });
    return res.json({
      code: 200,
      message: "Schedule was created successfully.",
      schedule: newSchedule
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [PATCH] /api/v1/admin/schedules/update/:id
const update = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>>  => {
  try {
    const id: string = req.params.id;

    const timeStart: string = req.body.timeStart;
    const timeEnd: string = req.body.timeEnd;
    const busId: string = req.body.busId;
    const busRouteId: string = req.body.busRouteId;

    const [
      scheduleExists,
      busExists,
      busRouteExists
    ] = await Promise.all([
      scheduleService.findById(id),
      busService.findById(busId),
      busRoutesService.findById(busRouteId)
    ]);
    if (!scheduleExists) {
      return res.json({
        code: 404,
        message: "Schedule id not found."
      });
    }
    if (!busExists) {
      return res.json({
        code: 404,
        message: "Bus id not found."
      });
    }
    if (!busRouteExists) {
      return res.json({
        code: 404,
        message: "Bus route id not found."
      });
    }

    const newSchedule = await scheduleService.create({
      timeStart,
      timeEnd,
      busId,
      busRouteId
    });
    return res.json({
      code: 200,
      message: "Schedules was updated successfully.",
      schedule: newSchedule
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [DELETE] /api/v1/admin/schedules/delete/:id
const del = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>>  => {
  try {
    const id: string = req.params.id;

    const scheduleExists = await scheduleService.findById(id);
    if (!scheduleExists) {
      return res.json({
        code: 404,
        message: "Schedule id not found."
      });
    }

    await scheduleService.del(id);
    return res.json({
      code: 200,
      message: "Schedule was deleted successfully."
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const scheduleController = {
  get,
  getById,
  create,
  update,
  del
};
export default scheduleController;