import { Express } from "express";

import configs from "../../../../configs/index.config";

import addressRoutes from "./address.route";

const adminRouteV1 = (app: Express) => {
  const path = "/api/v1" + configs.prefixAdmin;

  app.use(path + "/addresses", addressRoutes);
}

export default adminRouteV1;