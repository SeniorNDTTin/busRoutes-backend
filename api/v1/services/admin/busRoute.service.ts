import busRouteModel from "../../models/busRoute.model";
import IBusRoutes from "../../interfaces/busRoute.interface";

const create = async (data : IBusRoutes) => {
    const newBusRoutes= new busRouteModel(data);
    await newBusRoutes.save();
    return newBusRoutes;
  }

  const findById = async (id: string) => {
    const getBusRoute = await busRouteModel.findOne({ _id: id });
    return getBusRoute;
  }

  const find = async ()=> {
    const getAll = await busRouteModel.find({})
    return getAll;
  }

  const update = async (id: string, data: Partial<IBusRoutes>) => {
    const newDistrict = await busRouteModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    return newDistrict;
  }

  const del = async(id: string) => {
    await busRouteModel.deleteOne({_id: id})
  }


const busRoutesService = { create, findById, find ,update, del}

export default busRoutesService