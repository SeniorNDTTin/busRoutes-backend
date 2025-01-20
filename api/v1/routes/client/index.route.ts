import { Express } from "express";

import addressRoutes from "./address.route";

const clientRouteV1 = (app: Express) => {
  const path = "/api/v1";

  app.use(path + "/addresses", addressRoutes);
}

export default clientRouteV1;