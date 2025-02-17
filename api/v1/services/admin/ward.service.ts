import { Request } from "express";

import WardModel from "../../models/ward.model";
import IWard from "../../interfaces/ward.interface";

const find = async (req: Request) => {
  const wards = await WardModel.find({});
  return wards;
}

const findById = async (id: string) => {
  const wardExists = await WardModel.findOne({ _id: id });
  return wardExists;
}

const create = async (ward: Partial<IWard>) => {
  const newWard = new WardModel(ward);
  await newWard.save();
  return newWard;
}

const update = async (id: string, ward: Partial<IWard>) => {
  const newWard = await WardModel.findOneAndUpdate({ _id: id }, ward, {
    new: true,
    runValidators: true
  });
  return newWard;
}

const del = async (id: string) => {
  await WardModel.deleteOne({ _id: id });
}

const wardService = {
  find,
  findById,
  create,
  update,
  del
};
export default wardService;