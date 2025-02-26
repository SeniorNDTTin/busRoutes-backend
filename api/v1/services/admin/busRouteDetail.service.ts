import { Request } from "express";

import BusRouteDetailModel from "../../../../models/busRouteDetail.model"
import IBusRouteDetail from "../../../../interfaces/busRouteDetail.interface";

const find = async (req: Request) => {
  const busRouteDetails = await BusRouteDetailModel.find({});
  return busRouteDetails;
}

const findById = async (id: string) => {
  const busRouteDetailExists = await BusRouteDetailModel.findOne({ _id: id });
  return busRouteDetailExists;
}

const findByRouteId = async(id : string) => {
  const busRouteDetails = await BusRouteDetailModel.find({ busRouteId : id})
  return busRouteDetails;
}

const create = async (busRouteDetail: Partial<IBusRouteDetail>) => {
  const newBusRouteDetail = new BusRouteDetailModel(busRouteDetail);
  await newBusRouteDetail.save();
  return newBusRouteDetail;
}

const update = async (id: string, busRouteDetail: Partial<IBusRouteDetail>) => {
  const newBusRouteDetail = await BusRouteDetailModel.findOneAndUpdate({_id: id}, busRouteDetail, {
    new: true,
    runValidators: true
  });
  return newBusRouteDetail;
}

const del = async (id: string) => {
  await BusRouteDetailModel.deleteOne({_id: id});
}

const busRouteDetailService = {
  find,
  findById,
  findByRouteId,
  create,
  update,
  del
};
export default busRouteDetailService;