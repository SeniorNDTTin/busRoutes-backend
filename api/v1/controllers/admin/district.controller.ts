import { Request, Response } from "express";

import districtService from "../../services/admin/district.service";

// [GET] /api/v1/admin/districts/get
const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const districts = await districtService.find(req);
    return res.json({
      code: 200,
      message: "Districts found.",
      data: districts
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /api/v1/admin/districts/get/:id
const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const districtExists = await districtService.findById(id);
    if (!districtExists) {
      return res.json({
        code: 404,
        message: "District id not found."
      });
    }

    return res.json({
      code: 200,
      message: "District found.",
      data: districtExists
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [POST] /api/v1/admin/districts/create
const create = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const name: string = req.body.name;

    const newDistrict = await districtService.create({ name });
    return res.json({
      code: 201,
      message: "District was created successfully.",
      data: newDistrict
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [PATCH] /api/v1/admin/districts/update/:id
const update = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const name: string = req.body.name;

    const districtExists = await districtService.findById(id);
    if (!districtExists) {
      return res.json({
        code: 404,
        message: "District id not found."
      });
    }

    const newDistrict = await districtService.update(id, { name });
    return res.json({
      status: 200,
      message: "District was updated successfully.",
      data: newDistrict
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [DELETE] /api/v1/admin/districts/delete/:id
const del = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const districtExists = await districtService.findById(id);
    if (!districtExists) {
      return res.json({
        code: 404,
        message: "District id not found."
      });
    }

    await districtService.del(id);
    return res.json({
      code: 200,
      message: "District was deleted successfully."
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const districtCotroller = {
  get,
  getById,
  create,
  update,
  del
};
export default districtCotroller;