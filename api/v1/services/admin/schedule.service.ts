import { Request } from "express";

import ScheduleModel from "../../../../models/schedule.model";
import ISchedule from "../../../../interfaces/schedule.interface";

const find = async (req: Request) => {
  const schedules = await ScheduleModel.find({});
  return schedules;
}

const findById = async (id: string) => {
  const scheduleExists = await ScheduleModel.findOne({ _id: id });
  return scheduleExists;
}

const create = async (schedule: Partial<ISchedule>) => {
  const newSchedule = new ScheduleModel(schedule);
  await newSchedule.save();
  return newSchedule;
}

const update = async (id: string, schedule: Partial<ISchedule>) => {
  const newSchedule = await ScheduleModel.findOneAndUpdate({ _id: id }, schedule, {
    runValidators: true,
    new: true
  });
  return newSchedule;
}

const del = async (id: string) => {
  await ScheduleModel.deleteOne({ _id: id });
}

const scheduleService = {
  find,
  findById,
  create,
  update,
  del
};
export default scheduleService;