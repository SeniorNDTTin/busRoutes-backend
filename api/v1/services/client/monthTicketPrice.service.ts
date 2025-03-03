import { Request } from "express";

import MonthTicketPriceModel from "../../../../models/monthTicketPrice.model";
import IMonthTicketPrice from "../../../../interfaces/monthTicketPrice.interface";

const find = async (req: Request) => {
  const monthTicketPrices = await MonthTicketPriceModel.find({});
  return monthTicketPrices;
}

const findById = async (id: string) => {
  const monthTicketPriceExists = await MonthTicketPriceModel.findOne({ _id: id });
  return monthTicketPriceExists;
}

const monthTicketPriceService = {
  find,
  findById
};
export default monthTicketPriceService;