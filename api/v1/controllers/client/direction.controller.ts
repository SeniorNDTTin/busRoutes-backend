import { Request, Response } from "express";

import directionService from "../../services/client/direction.service";

// [GET] /api/v1/directions/get
const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const directions = await directionService.find();
    return res.json({
      code: 200,
      message: "Directions found.",
      data: directions
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    })
  }
}

// [GET] /api/v1/directions/get/:id
const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const directionExists = await directionService.findById(id);
    if (!directionExists) {
      return res.json({
        code: 404,
        message: "Direction id not found."
      });
    }

    return res.json({
      code: 200,
      message: "Direction found.",
      data: directionExists
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    })
  }
}

const directionController = {
  get,
  getById
};
export default directionController;