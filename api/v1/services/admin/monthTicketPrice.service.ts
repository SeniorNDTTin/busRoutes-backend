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

const create = async (data: Partial<IMonthTicketPrice>) => {
  const newMonthTicketPrice = new MonthTicketPriceModel(data);
  await newMonthTicketPrice.save();
  return newMonthTicketPrice;
}

const update = async (id: string, data: Partial<IMonthTicketPrice>) => {
  const newMonthTicketPrice = await MonthTicketPriceModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true
  });
  return newMonthTicketPrice;
}

const del = async (id: string) => {
  await MonthTicketPriceModel.deleteOne({ _id: id })
}

const monthTicketPriceService = {
  find,
  findById,
  create,
  update,
  del
};
export default monthTicketPriceService;