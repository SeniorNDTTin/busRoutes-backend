import BusRouteDetailModel from "../../../../models/busRouteDetail.model";

const find = async () => {
  const busRouteDetails = await BusRouteDetailModel.find({});
  return busRouteDetails;
}

const findByBusRouteId = async (busRouteId: string) => {
  const busRouteDetails = await BusRouteDetailModel.find({ busRouteId });
  return busRouteDetails;
}

const findById = async (id: string) => {
  const busRouteDetailExists = await BusRouteDetailModel.findOne({ _id: id });
  return busRouteDetailExists;
}

const busRouteDetailService = {
  find,
  findByBusRouteId,
  findById
};
export default busRouteDetailService;