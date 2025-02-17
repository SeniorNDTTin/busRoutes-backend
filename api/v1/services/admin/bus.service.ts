import { Request } from "express";
import IBus from "../../interfaces/bus.interface";
import BusModel from "../../models/bus.model";

// Lấy danh sách tất cả các bus
const find = async (req: Request) => {
  const buses = await BusModel.find({});
  return buses;
}

// Lấy chi tiết của một bus theo busId
const findById = async (id: string) => {
  const busExists = await BusModel.findOne({ _id: id });
  return busExists;
}

// Tạo mới một bus
const create = async (bus: Partial<IBus>) => {
  const newBus = new BusModel(bus);
  await newBus.save();
  return newBus;
}

// Cập nhật thông tin một bus theo busId
const update = async (id: string, bus: Partial<IBus>) => {
  const updatedBus = await BusModel.findOneAndUpdate({ _id: id }, bus, {
    new: true,
    runValidators: true
  });
  return updatedBus;
}

// Xóa một bus theo busId
const del = async (id: string) => {
  await BusModel.deleteOne({ _id: id });
}

const busService = {
  find,
  findById,
  create,
  update,
  del
};

export default busService;
