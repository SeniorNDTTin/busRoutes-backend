import IMonthTicket from "../../../../interfaces/monthTicket.interface";

import MonthTicketModel from "../../../../models/monthTicket.model";

const findById = async (id: string) => {
  const monthTicketExists = await MonthTicketModel.findOne({ _id: id });
  return monthTicketExists;
}

const create = async (monthTicket: Partial<IMonthTicket>) => {
  const newMonthTicket = new MonthTicketModel(monthTicket);
  await newMonthTicket.save();
  return newMonthTicket;
}

const monthTicketService = {
  findById,
  create
};
export default monthTicketService;