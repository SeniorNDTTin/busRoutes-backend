import { Request } from "express";
import MonthTicketModel from "../../../../models/monthTicket.model";
import IMonthTicket from "../../../../interfaces/monthTicket.interface";

const find = async (req: Request) => {
  const monthTickets = await MonthTicketModel.find({});
  return monthTickets;
}

const findById = async (id: string) => {
  const monthTicketExists = await MonthTicketModel.findOne({ _id: id });
  return monthTicketExists;
}

const create = async (monthTicket: Partial<IMonthTicket>) => {
  const newMonthTicket = new MonthTicketModel(monthTicket);
  await newMonthTicket.save();
  return newMonthTicket;
}

const update = async (id: string, monthTicket: Partial<IMonthTicket>) => {
  const newMonthTicket = await MonthTicketModel.findOneAndUpdate({ _id: id }, monthTicket, {
    new: true,
    runValidators: true
  });
  return newMonthTicket;
}

const del = async (id: string) => {
  await MonthTicketModel.deleteOne({ _id: id });
}

const monthTicketService = {
  find,
  findById,
  create,
  update,
  del
};
export default monthTicketService;