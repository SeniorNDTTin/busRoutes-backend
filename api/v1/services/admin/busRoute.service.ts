import { Request } from "express";

import busRouteModel from "../../models/busRoute.model";
import IBusRoutes from "../../interfaces/busRoute.interface";

const find = async (req: Request) => {
  const busRoutes = await busRouteModel.find({});
  return busRoutes;
}

const findById = async (id: string) => {
  const busRouteExists = await busRouteModel.findOne({ _id: id });
  return busRouteExists;
}

const create = async (data: Partial<IBusRoutes>) => {
  const newBusRoutes = new busRouteModel(data);
  await newBusRoutes.save();
  return newBusRoutes;
}

const update = async (id: string, data: Partial<IBusRoutes>) => {
  const newDistrict = await busRouteModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true
  });
  return newDistrict;
}

const del = async (id: string) => {
  await busRouteModel.deleteOne({ _id: id })
}

const busRoutesService = {
  create,
  findById,
  find,
  update,
  del
};

export default busRoutesService;