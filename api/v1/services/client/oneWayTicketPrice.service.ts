import { Request } from "express";

import OneWayTicketPriceModel from "../../../../models/oneWayTicketPrice.model";
import IOneWayTicketPrice from "../../../../interfaces/oneWayTicketPrice.interface";

const find = async (req: Request) => {
  const oneWayTicketPrices = await OneWayTicketPriceModel.find({});
  return oneWayTicketPrices;
}

const findById = async (id: string) => {
  const oneWayTicketPriceExists = await OneWayTicketPriceModel.findOne({ _id: id });
  return oneWayTicketPriceExists;
}

const oneWayTicketPriceService = {
  find,
  findById
};
export default oneWayTicketPriceService;