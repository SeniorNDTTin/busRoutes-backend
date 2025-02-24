import { Express } from "express";

import configs from "../../../../configs/index.config";

import districtRoutes from "./district.route";
import wardRoutes from "./ward.route";
import streetRoutes from "./street.route";
import busStopRoutes from "./busStop.route";
import busRoutes from "./bus.route";
import directionRoutes from "./direction.route";
import busRouteRoutes from "./busRoute.route";
import busRouteDetailRoutes from "./busRouteDetail.route";
import oneWayTicketPriceRoutes from "./oneWayTicketPrice.route";
import monthTicketPriceRoutes from "./monthTicketPrice.route";
import scheduleRoutes from "./schedule.route";
import customerRoutes from "./customer.route";
import monthTicketRoutes from "./monthTicket.route";

const adminRouteV1 = (app: Express) => {
  const path = "/api/v1" + configs.prefixAdmin;

  app.use(`${path}/districts`, districtRoutes);
  app.use(`${path}/wards`, wardRoutes);
  app.use(`${path}/streets`, streetRoutes);
  app.use(`${path}/busStops`, busStopRoutes);
  app.use(`${path}/buses`, busRoutes);
  app.use(`${path}/directions`, directionRoutes);
  app.use(`${path}/busRoutes`, busRouteRoutes);
  app.use(`${path}/busRouteDetails`, busRouteDetailRoutes);
  app.use(`${path}/oneWayTicketPrices`, oneWayTicketPriceRoutes);
  app.use(`${path}/monthTicketPrices`, monthTicketPriceRoutes);
  app.use(`${path}/schedules`, scheduleRoutes);
  app.use(`${path}/customers`, customerRoutes);
  app.use(`${path}/monthTickets`, monthTicketRoutes);
}

export default adminRouteV1;