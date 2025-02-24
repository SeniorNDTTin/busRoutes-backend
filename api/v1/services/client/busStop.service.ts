import BusStopModel from "../../../../models/busStop.model"

const find = async () => {
  const busStops = await BusStopModel.find({});
  return busStops;
}

const findById = async (id: string) => {
  const busStopExists = await BusStopModel.findOne({ _id: id });
  return busStopExists;
}

const busStopService = {
  find,
  findById
};
export default busStopService;