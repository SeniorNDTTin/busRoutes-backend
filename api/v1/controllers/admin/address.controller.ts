import { Request, Response } from "express";

import addressService from "../../services/admin/address.service";

// [GET] /admin/addresses/get
const get = async (req: Request, res: Response) => {
  try {
    const addresses = await addressService.find();
    return res.json({
      code: 200,
      message: "Address found.",
      data: addresses
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /admin/addresses/get/:id
const getById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const addressExists = await addressService.findById(id);
    if (!addressExists) {
      return res.json({
        code: 404,
        message: "Address id not found."
      });
    }
    return res.json({
      code: 200,
      message: "Address found.",
      data: addressExists
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [POST] /admin/addresses/create
const create = async (req: Request, res: Response) => {
  try {
    const street = req.body.street;
    const ward = req.body.ward;
    const district = req.body.district;

    const newAddress = await addressService.create({
      street,
      ward,
      district
    });
    return res.json({
      code: 201,
      message: "Address was created successfully.",
      data: newAddress
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [PATCH] /admin/addresses/update/:id
const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const street = req.body.street;
    const ward = req.body.ward;
    const district = req.body.district;

    const addressExists = await addressService.findById(id);
    if (!addressExists) {
      return res.json({
        code: 404,
        message: "Address id not found."
      });
    }

    const newAddress = await addressService.update(id, {
      street,
      ward,
      district
    });
    return res.json({
      code: 200,
      message: "Address was created successfully.",
      data: newAddress
    })
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [DELETE] /admin/addresses/delete/:id
const del = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const addressExists = await addressService.findById(id);
    if (!addressExists) {
      return res.json({
        code: 404,
        message: "Address id not found."
      });
    }

    await addressService.del(id);
    return res.json({
      code: 200,
      message: "Address was deleted successfully."
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const addressController = {
  get,
  getById,
  create,
  update,
  del
};
export default addressController;