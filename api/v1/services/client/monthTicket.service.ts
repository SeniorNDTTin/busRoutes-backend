import IMonthTicket from "../../../../interfaces/monthTicket.interface";

import MonthTicketModel from "../../../../models/monthTicket.model";

const create = async (monthTicket: Partial<IMonthTicket>) => {
  const newMonthTicket = new MonthTicketModel(monthTicket);
  await newMonthTicket.save();
  return newMonthTicket;
}

const monthTicketService = {
  create
};
export default monthTicketService;