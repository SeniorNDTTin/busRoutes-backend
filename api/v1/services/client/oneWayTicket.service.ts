import IOneWayTicket from "../../../../interfaces/oneWayTicket.interface";

import OneWayTicketModel from "../../../../models/oneWayTicket.model";

const findById = async (id: string) => {
  const oneWayTicketExists = await OneWayTicketModel.findOne({ _id: id });
  return oneWayTicketExists;
}

const create = async (oneWayTicket: Partial<IOneWayTicket>) => {
  const newOneWayTicket = new OneWayTicketModel(oneWayTicket);
  await newOneWayTicket.save();
  return newOneWayTicket;
}

const oneWayTicketService = { findById, create };
export default oneWayTicketService;