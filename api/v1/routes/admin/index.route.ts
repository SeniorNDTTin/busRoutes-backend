import { Express } from "express";

import configs from "../../../../configs/index.config";

import districtRoutes from "./district.route";

const adminRouteV1 = (app: Express) => {
  const path = "/api/v1" + configs.prefixAdmin;

  app.use(`${path}/districts`, districtRoutes);
}

export default adminRouteV1;