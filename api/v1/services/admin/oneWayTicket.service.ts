import { Request } from "express";

import IOneWayTicket from "../../../../interfaces/oneWayTicket.interface";

import OneWayTicketModel from "../../../../models/oneWayTicket.model";

const find = async (req: Request) => {
  const oneWayTickets = await OneWayTicketModel.find({});
  return oneWayTickets;
}

const findById = async (id: string) => {
  const oneWayTicketExists = await OneWayTicketModel.findOne({ _id: id });
  return oneWayTicketExists;
}

const create = async (oneWayTicket: Partial<IOneWayTicket>) => {
  const newOneWayTicket = new OneWayTicketModel(oneWayTicket);
  await newOneWayTicket.save();
  return newOneWayTicket;
}

const del = async (id: string) => {
  await OneWayTicketModel.deleteOne({ _id: id });
}

const oneWayTicketService = {
  find,
  findById,
  create,
  del
};
export default oneWayTicketService;