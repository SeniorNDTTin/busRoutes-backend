import { Request } from "express";

import ITicketDetail from "../../../../interfaces/ticketDetail.interface";

import TicketDetailModel from "../../../../models/ticketDetail.model";

const find = async (req: Request) => {
  const ticketDetails = await TicketDetailModel.find({});
  return ticketDetails;
}

const findById = async (id: string) => {
  const ticketDetailExists = await TicketDetailModel.findOne({ _id: id });
  return ticketDetailExists;
}

const create = async (ticketDetail: Partial<ITicketDetail>) => {
  const newTicketDetail = new TicketDetailModel(ticketDetail);
  await newTicketDetail.save();
  return newTicketDetail;
}

const update = async (id: string, ticketDetail: Partial<ITicketDetail>) => {
  const newTicketDetail = await TicketDetailModel.findOneAndUpdate({ _id: id }, ticketDetail, {
    runValidators: true,
    new: true
  });
  return newTicketDetail;
}

const del = async (id: string) => {
  await TicketDetailModel.deleteOne({ _id: id });
}

const ticketDetailService = {
  find,
  findById,
  create,
  update,
  del
};
export default ticketDetailService;