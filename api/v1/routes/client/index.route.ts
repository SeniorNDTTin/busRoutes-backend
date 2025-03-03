import { Express } from "express";

import busRouteRoutes from "./busRoute.route";
import busRouteDetailRoutes from "./busRouteDetail.route";
import busStopRoutes from "./busStop.route";
import directionRoutes from "./direction.route";
import oneWayTicketRoutes from "./oneWayTicket.route";
import monthTicketRoutes from "./monthTicket.route";
import customerRoutes from "./customer.route";

const clientRouteV1 = (app: Express) => {
  const path = "/api/v1";

  app.use(`${path}/busRoutes`, busRouteRoutes);
  app.use(`${path}/busRouteDetails`, busRouteDetailRoutes);
  app.use(`${path}/busStops`, busStopRoutes);
  app.use(`${path}/directions`, directionRoutes);
  app.use(`${path}/oneWayTickets`, oneWayTicketRoutes);
  app.use(`${path}/monthTickets`, monthTicketRoutes);
  app.use(`${path}/customers`, customerRoutes);
}

export default clientRouteV1;