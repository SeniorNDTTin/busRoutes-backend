import { Request, Response } from "express";
import busService from "../../services/admin/bus.service";

// [GET] /api/v1/admin/buses/get
const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const buses = await busService.find(req);
    return res.json({
      code: 200,
      message: "Buses found.",
      data: buses
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /api/v1/admin/buses/get/:id
const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const busExists = await busService.findById(id);
    if (!busExists) {
      return res.json({
        code: 404,
        message: "Bus id not found."
      });
    }

    return res.json({
      code: 200,
      message: "Bus found.",
      data: busExists
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [POST] /api/v1/admin/buses/create
const create = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const { busId, licensePlate, chairQuantity } = req.body;

    const newBus = await busService.create({  licensePlate, chairQuantity });
    return res.json({
      code: 201,
      message: "Bus was created successfully.",
      data: newBus
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [PATCH] /api/v1/admin/buses/update/:id
const update = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const { busId, licensePlate, chairQuantity } = req.body;

    const busExists = await busService.findById(id);
    if (!busExists) {
      return res.json({
        code: 404,
        message: "Bus id not found."
      });
    }

    const updatedBus = await busService.update(id, { licensePlate, chairQuantity });
    return res.json({
      status: 200,
      message: "Bus was updated successfully.",
      data: updatedBus
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [DELETE] /api/v1/admin/buses/delete/:id
const del = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const busExists = await busService.findById(id);
    if (!busExists) {
      return res.json({
        code: 404,
        message: "Bus id not found."
      });
    }

    await busService.del(id);
    return res.json({
      code: 200,
      message: "Bus was deleted successfully."
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const busController = {
  get,
  getById,
  create,
  update,
  del
};

export default busController;
