import { Request, Response } from "express";
import directionService from "../../services/admin/direction.service";
import { equal } from "assert";

// [GET] /api/v1/admin/directions/get
const get = async (req: Request, res: Response) => {
  try {
    const directions = await directionService.find(req);
    return res.json({
      code: 200,
      message: "Directions found.",
      data: directions
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /api/v1/admin/directions/get/:id
const getById = async (req: Request, res: Response) => {
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
    });
  }
}

// [POST] /api/v1/admin/directions/create
const create = async (req: Request, res: Response) => {
  try {
    const description: string = req.body.description;

    const newDirection = await directionService.create({ description });
    return res.json({
      code: 201,
      messsage: "Direction was created successfully.",
      data: newDirection
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [PATCH] /api/v1/admin/directions/update/:id
const update = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    const description: string = req.body.description;

    const directionExists = await directionService.findById(id);
    if (!directionExists) {
      return res.json({
        code: 404,
        message: "Direction id not found."
      });
    }

    const newDirection = await directionService.update(id, { description });
    return res.json({
      code: 200,
      message: "Direction was updated successfully.",
      data: newDirection
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [DELETE] /api/v1/admin/directions/delete/:id
const del = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    const directionExists = await directionService.findById(id);
    if (!directionExists) {
      return res.json({
        code: 404,
        message: "Direction id not found."
      });
    }

    await directionService.del(id);
    return res.json({
      code: 200,
      message: "Direction was deleted successfully."
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const directionController = {
  get,
  getById,
  create,
  update,
  del
};
export default directionController;