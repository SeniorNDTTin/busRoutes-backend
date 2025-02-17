import { Express } from "express";

import configs from "../../../../configs/index.config";

import districtRoutes from "./district.route";
import wardRoutes from "./ward.route";
import streetRoutes from "./street.route";
<<<<<<< HEAD
import busStopRoutes from "./busStop.route";
=======
import busRoutes from "./bus.route";
>>>>>>> 666fe30f4353e264ef37fa32068232ea3022a3fc

const adminRouteV1 = (app: Express) => {
  const path = "/api/v1" + configs.prefixAdmin;

  app.use(`${path}/districts`, districtRoutes);
  app.use(`${path}/wards`, wardRoutes);
  app.use(`${path}/streets`, streetRoutes);
<<<<<<< HEAD
  app.use(`${path}/busStops`, busStopRoutes);
=======
  app.use(`${path}/buses`, busRoutes);
>>>>>>> 666fe30f4353e264ef37fa32068232ea3022a3fc
}

export default adminRouteV1;