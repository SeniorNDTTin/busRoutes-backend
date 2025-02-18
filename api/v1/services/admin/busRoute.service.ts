import { Request } from "express";

import busRouteModel from "../../models/busRoute.model";
import IBusRoute from "../../interfaces/busRoute.interface";

const find = async (req: Request) => {
  const busRoutes = await busRouteModel.find({});
  return busRoutes;
}

const findById = async (id: string) => {
  const busRouteExists = await busRouteModel.findOne({ _id: id });
  return busRouteExists;
}

const create = async (data: Partial<IBusRoute>) => {
  const newBusRoute = new busRouteModel(data);
  await newBusRoute.save();
  return newBusRoute;
}

const update = async (id: string, data: Partial<IBusRoute>) => {
  const newBusRoute = await busRouteModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true
  });
  return newBusRoute;
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