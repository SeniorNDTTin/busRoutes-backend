import { Request } from "express";

import IDistrict from "../../interfaces/district.interface"
import DistrictModel from "../../models/district.model"

const find = async (req: Request) => {
  const districts = await DistrictModel.find({});
  return districts
}

const findById = async (id: string) => {
  const districtExists = await DistrictModel.findOne({ _id: id });
  return districtExists;
}

const create = async (district: Partial<IDistrict>) => {
  const newDistrict = new DistrictModel(district);
  await newDistrict.save();
  return newDistrict;
}

const update = async (id: string, district: Partial<IDistrict>) => {
  const newDistrict = await DistrictModel.findOneAndUpdate({ _id: id }, district, {
    new: true,
    runValidators: true
  });
  return newDistrict;
}

const del = async (id: string) => {
  await DistrictModel.deleteOne({ _id: id });
}

const districtService = {
  find,
  findById,
  create,
  update,
  del
};
export default districtService;