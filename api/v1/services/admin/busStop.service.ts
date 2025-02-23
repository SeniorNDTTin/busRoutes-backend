import { Request } from "express";

import IBusStop from "../../../../interfaces/busStop.interface"
import BusStopModel from "../../../../models/busStop.model"

const find = async (req: Request) => {
  const busStops = await BusStopModel.find({});
  return busStops;
}

const findById = async (id: string) => {
  const busStopExists = await BusStopModel.findOne({ _id: id });
  return busStopExists;
}

const create = async (busStop: Partial<IBusStop>) => {
  const newBusStop = new BusStopModel(busStop);
  await newBusStop.save();
  return newBusStop;
}

const update = async (id: string, busStop: Partial<IBusStop>) => {
  const newBusStop = await BusStopModel.findOneAndUpdate({ _id: id }, busStop, {
    new: true,
    runValidators: true
  });
  return newBusStop;
}

const del = async (id: string) => {
  await BusStopModel.deleteOne({ _id: id });
}

const busStopService = {
  find,
  findById,
  create,
  update,
  del
};
export default busStopService;