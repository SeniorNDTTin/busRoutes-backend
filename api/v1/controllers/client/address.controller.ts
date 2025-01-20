import { Request, Response } from "express";
import addressService from "../../services/client/address.service";

const get = async (req: Request, res: Response) => {
  try {
    const addresses = await addressService.find();
    return res.json({
      code: 200,
      message: "Addresses found.",
      data: addresses
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const addressController = {
  get
};
export default addressController;