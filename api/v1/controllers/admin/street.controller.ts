import { Request, Response } from "express";

import streetService from "../../services/admin/street.service";
import wardService from "../../services/admin/ward.service";

// [GET] /api/v1/admin/wards/get
const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const streets = await streetService.find(req);
    return res.json({
      code: 200,
      message: "Streets found.",
      data: streets
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /api/v1/admin/streets/get/:id
const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const streetExists = await streetService.findById(id);
    if (!streetExists) {
      return res.json({
        code: 404,
        message: "Street id not found."
      });
    }

    return res.json({
      code: 200,
      message: "Street found.",
      data: streetExists
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [POST] /api/v1/admin/streets/create
const create = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const name: string = req.body.name;
    const wardId: string = req.body.wardId;

    const wardExists = await wardService.findById(wardId);
    if (!wardExists) {
      return res.json({
        code: 404,
        message: "Ward id not found."
      });
    }

    const newStreet = await streetService.create({
      name,
      wardId
    });
    return res.json({
      code: 201,
      message: "Street was created successfully.",
      data: newStreet
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [POST] /api/v1/admin/streets/update/:id
const update = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const name: string = req.body.name;
    const wardId: string = req.body.wardId;

    const [
      streetExists,
      wardExists
    ] = await Promise.all([
      streetService.findById(id),
      wardService.findById(wardId)
    ]);
    if (!streetExists) {
      return res.json({
        code: 404,
        message: "Street id not found."
      });
    }
    if (wardId && !wardExists) {
      return res.json({
        code: 404,
        message: "Ward id not found."
      });
    }

    const newStreet = await streetService.update(id, {
      name,
      wardId
    });
    return res.json({
      code: 200,
      message: "Street was updated successfully.",
      data: newStreet
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [DELETE] /api/v1/admin/streets/delete/:id
const del = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const streetExists = await streetService.findById(id);
    if (!streetExists) {
      return res.json({
        code: 404,
        message: "Street id not found."
      });
    }

    await streetService.del(id);
    return res.json({
      code: 200,
      message: "Street was deleted successfully."
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const streetController = {
  get,
  getById,
  create,
  update,
  del
};
export default streetController;