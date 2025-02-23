import { Request } from "express";

import StreetModel from "../../../../models/street.model";
import IStreet from "../../../../interfaces/street.interface";

const find = async (req: Request) => {
  const streets = await StreetModel.find({});
  return streets;
}

const findById = async (id: string) => {
  const streetExists = await StreetModel.findOne({ _id: id });
  return streetExists;
}

const create = async (street: Partial<IStreet>) => {
  const newStreet = new StreetModel(street);
  await newStreet.save();
  return newStreet;
}

const update = async (id: string, street: Partial<IStreet>) => {
  const newStreet = await StreetModel.findOneAndUpdate({ _id: id }, street, {
    new: true,
    runValidators: true
  });
  return newStreet;
}

const del = async (id: string) => {
  await StreetModel.deleteOne({ _id: id });
}

const findByWard = async(wardId: string) => {
  return await StreetModel.find({wardId});
}

const streetService = {
  find,
  findById,
  create,
  update,
  del,
  findByWard
};
export default streetService;