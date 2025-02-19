import { Request } from "express";

import OneWayTicketPriceModel from "../../models/oneWayTicketPrice.model";
import IOneWayTicketPrice from "../../interfaces/oneWayTicketPrice.interface";

const find = async (req: Request) => {
  const oneWayTicketPrices = await OneWayTicketPriceModel.find({});
  return oneWayTicketPrices;
}

const findById = async (id: string) => {
  const oneWayTicketPriceExists = await OneWayTicketPriceModel.findOne({ _id: id });
  return oneWayTicketPriceExists;
}

const create = async (data: Partial<IOneWayTicketPrice>) => {
  const newOneWayTicketPrice = new OneWayTicketPriceModel(data);
  await newOneWayTicketPrice.save();
  return newOneWayTicketPrice;
}

const update = async (id: string, data: Partial<IOneWayTicketPrice>) => {
  const newOneWayTicketPrice = await OneWayTicketPriceModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true
  });
  return newOneWayTicketPrice;
}

const del = async (id: string) => {
  await OneWayTicketPriceModel.deleteOne({ _id: id })
}

const oneWayTicketPriceService = {
  find,
  findById,
  create,
  update,
  del
};
export default oneWayTicketPriceService;