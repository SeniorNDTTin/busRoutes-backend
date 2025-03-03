import IOneWayTicket from "../../../../interfaces/oneWayTicket.interface";

import OneWayTicketModel from "../../../../models/oneWayTicket.model";

const create = async (oneWayTicket: Partial<IOneWayTicket>) => {
  const newOneWayTicket = new OneWayTicketModel(oneWayTicket);
  await newOneWayTicket.save();
  return newOneWayTicket;
}

const oneWayTicketService = { create };
export default oneWayTicketService;