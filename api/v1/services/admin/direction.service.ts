import { Request } from "express";

import DirectionModel from "../../models/direction.model";
import IDirection from "../../interfaces/direction.interface";

const find = async (req: Request) => {
  const directions = await DirectionModel.find({});
  return directions;
}

const findById = async (id: string) => {
  const directionExists = await DirectionModel.findOne({ _id: id });
  return directionExists;
}

const create = async (direction: Partial<IDirection>) => {
  const newDirection = new DirectionModel(direction);
  await newDirection.save();
  return newDirection;
}

const update = async (id: string, direction: Partial<IDirection>) => {
  const newDirection = await DirectionModel.findOneAndUpdate({ _id: id }, direction, {
    new: true,
    runValidators: true
  });
  return newDirection;
}

const del = async (id: string) => {
  await DirectionModel.deleteOne({ _id: id });
}

const directionService = {
  find,
  findById,
  create,
  update,
  del
};
export default directionService;