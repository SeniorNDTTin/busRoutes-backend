import { Request, Response } from "express";

import customerService from "../../services/admin/customer.service";

// [GET] /api/v1/admin/customers/get
const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const customers = await customerService.find(req);
    return res.json({
      code: 200,
      message: "Customers found.",
      data: customers
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /api/v1/admin/customers/get/:id
const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const customerExists = await customerService.findById(id);
    if (!customerExists) {
      return res.json({
        code: 404,
        message: "Customer id not found."
      });
    }

    return res.json({
      code: 200,
      message: "Customer found.",
      data: customerExists
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [POST] /api/v1/admin/customers/create
const create = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const fullName: string = req.body.fullName;
    const phone: string = req.body.phone;
    const email: string = req.body.email;

    const [
      customerPhoneExists,
      customerEmailExists
    ] = await Promise.all([
      customerService.findByPhone(phone),
      customerService.findByEmail(email)
    ]);
    if (customerPhoneExists) {
      return res.json({
        code: 400,
        message: "Phone already exists."
      });
    }
    if (customerEmailExists) {
      return res.json({
        code: 400,
        message: "Email already exists."
      });
    }

    const newCustomer = await customerService.create({
      fullName,
      phone,
      email
    });
    return res.json({
      code: 201,
      message: "Customer was created successfully.",
      data: newCustomer
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [PATCH] /api/v1/admin/customers/update/:id
const update = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const fullName: string = req.body.fullName;
    const phone: string = req.body.phone;
    const email: string = req.body.email;

    const [
      customerIdExists,
      customerPhoneExists,
      customerEmailExists
    ] = await Promise.all([
      customerService.findById(id),
      customerService.findByPhone(phone),
      customerService.findByEmail(email)
    ]);
    if (!customerIdExists) {
      return res.json({
        code: 404,
        message: "Customer id not found."
      });
    }
    if (
      phone && 
      customerPhoneExists &&
      customerPhoneExists.id !== id
    ) {
      return res.json({
        code: 400,
        message: "Phone already exists."
      });
    }
    if (
      email &&
      customerEmailExists &&
      customerEmailExists.id !== id
    ) {
      return res.json({
        code: 400,
        message: "Email already exists."
      });
    }

    const newCustomer = await customerService.update(id, {
      fullName,
      phone,
      email
    });
    return res.json({
      code: 200,
      message: "Customer was updated successfully.",
      data: newCustomer
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [DELETE] /api/v1/admin/customers/delete/:id
const del = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const customerExists = await customerService.findById(id);
    if (!customerExists) {
      return res.json({
        code: 404,
        message: "Customer id not found."
      });
    }

    await customerService.del(id);
    return res.json({
      code: 200,
      message: "Customer was deleted successfully."
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const customerController = {
  get,
  getById,
  create,
  update,
  del
};
export default customerController;