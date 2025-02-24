import busRouteModel from "../../../../models/busRoute.model";

const find = async () => {
  const busRoutes = await busRouteModel.find({});
  return busRoutes;
}

const findById = async (id: string) => {
  const busRouteExists = await busRouteModel.findOne({ _id: id });
  return busRouteExists;
}

const busRouteService = {
  find,
  findById
};
export default busRouteService;