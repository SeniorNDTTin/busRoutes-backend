import { Request, Response } from "express";

import customerService from "../../services/client/customer.service";

// [GET] /api/v1/customers/get-email/:email
const getByEmail = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const email: string = req.params.email;

    const customerExists = await customerService.findByEmail(email);
    if (!customerExists) {
      return res.json({
        code: 404,
        message: "Customer phone not found.0"
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

// [GET] /api/v1/customers/get-phone/:phone
const getByPhone = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const phone: string = req.params.phone;

    const customerExists = await customerService.findByPhone(phone);
    if (!customerExists) {
      return res.json({
        code: 404,
        message: "Customer phone not found."
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

// [POST] /api/v1/customers/create
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

const customerController = {
  getByEmail,
  getByPhone,
  create
};
export default customerController;