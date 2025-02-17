import { Express } from "express";

import configs from "../../../../configs/index.config";

import districtRoutes from "./district.route";
import wardRoutes from "./ward.route";
import streetRoutes from "./street.route";
import busStopRoutes from "./busStop.route";
import busRoutes from "./bus.route";

const adminRouteV1 = (app: Express) => {
  const path = "/api/v1" + configs.prefixAdmin;

  app.use(`${path}/districts`, districtRoutes);
  app.use(`${path}/wards`, wardRoutes);
  app.use(`${path}/streets`, streetRoutes);
  app.use(`${path}/busStops`, busStopRoutes);
  app.use(`${path}/buses`, busRoutes);
}

export default adminRouteV1;