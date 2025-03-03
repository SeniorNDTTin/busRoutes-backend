import { Request, Response } from "express";

import { ETicketDetailType } from "../../../../enums/ticketDetail.enum";

import ticketDetailService from "../../services/client/ticketDetail.service";
import monthTicketService from "../../services/client/monthTicket.service";
import scheduleService from "../../services/client/schedule.service";
import oneWayTicketService from "../../services/client/oneWayTicket.service";

// [GET] /api/v1/ticketDetails/get
const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const ticketDetails = await ticketDetailService.find(req);
    return res.json({
      code: 200,
      message: "Ticket details found.",
      data: ticketDetails
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /api/v1/ticketDetails/get/:id
const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const ticketDetailExists = await ticketDetailService.findById(id);
    if (!ticketDetailExists) {
      return res.json({
        code: 404,
        message: "Ticket detail id not found."
      });
    }

    return res.json({
      code: 200,
      message: "Ticket detail found.",
      data: ticketDetailExists
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [POST] /api/v1/ticketDetails/create
const create = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const type: ETicketDetailType = req.body.type;
    const date: string = req.body.date;
    const ticketId: string = req.body.ticketId;
    const scheduleId: string = req.body.scheduleId;

    switch (type) {
      case ETicketDetailType.oneWay: {
        const [
          oneWayTicketExists,
          scheduleExists
        ] = await Promise.all([
          oneWayTicketService.findById(ticketId),
          scheduleService.findById(scheduleId)
        ]);
        if (!oneWayTicketExists) {
          return res.json({
            code: 404,
            message: "One way ticket id not found."
          });
        }
        if (!scheduleExists) {
          return res.json({
            code: 404,
            message: "Schedule id not found."
          });
        }

        const newMonthTicket = await ticketDetailService.create({
          type,
          date,
          ticketId,
          scheduleId
        });
        return res.json({
          code: 201,
          message: "Ticket detail was created successfully.",
          data: newMonthTicket
        });
      }

      case ETicketDetailType.month: {
        const [
          monthTicketExists,
          scheduleExists
        ] = await Promise.all([
          monthTicketService.findById(ticketId),
          scheduleService.findById(scheduleId)
        ]);
        if (!monthTicketExists) {
          return res.json({
            code: 404,
            message: "Month ticket id not found."
          });
        }
        if (!scheduleExists) {
          return res.json({
            code: 404,
            message: "Schedule id not found."
          });
        }

        const newMonthTicket = await ticketDetailService.create({
          type,
          date,
          ticketId,
          scheduleId
        });
        return res.json({
          code: 201,
          message: "Ticket detail was created successfully.",
          data: newMonthTicket
        });

      }

      default: {
        return res.json({
          code: 500,
          message: "Something went wrong."
        });
      }
    }
  } catch(e) {
    console.log(e);

    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [PATCH] /api/v1/ticketDetails/update/:id
const update = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const type: ETicketDetailType = req.body.type;
    const date: string = req.body.date;
    const ticketId: string = req.body.ticketId;
    const scheduleId: string = req.body.scheduleId;

    switch (type) {
      case ETicketDetailType.oneWay: {
        const [
          ticketDetailExists,
          oneWayTicketExists,
          scheduleExists
        ] = await Promise.all([
          ticketDetailService.findById(id),
          oneWayTicketService.findById(ticketId),
          scheduleService.findById(scheduleId)
        ]);
        if (!ticketDetailExists) {
          return res.json({
            code: 404,
            message: "Ticket detail id not found."
          })
        }
        if (!oneWayTicketExists) {
          return res.json({
            code: 404,
            message: "One way ticket id not found."
          });
        }
        if (!scheduleExists) {
          return res.json({
            code: 404,
            message: "Schedule id not found."
          });
        }

        const newMonthTicket = await ticketDetailService.update(id, {
          type,
          date,
          ticketId,
          scheduleId
        });
        return res.json({
          code: 200,
          message: "Ticket detail was updated successfully.",
          data: newMonthTicket
        });
      }

      case ETicketDetailType.month: {
        const [
          ticketDetailExists,
          monthTicketExists,
          scheduleExists
        ] = await Promise.all([
          ticketDetailService.findById(id),
          monthTicketService.findById(ticketId),
          scheduleService.findById(scheduleId)
        ]);
        if (!ticketDetailExists) {
          return res.json({
            code: 404,
            message: "Ticket detail id not found."
          })
        }
        if (!monthTicketExists) {
          return res.json({
            code: 404,
            message: "Month ticket id not found."
          });
        }
        if (!scheduleExists) {
          return res.json({
            code: 404,
            message: "Schedule id not found."
          });
        }

        const newMonthTicket = await ticketDetailService.update(id, {
          type,
          date,
          ticketId,
          scheduleId
        });
        return res.json({
          code: 200,
          message: "Ticket detail was updated successfully.",
          data: newMonthTicket
        });
      }
      default: {
        return res.json({
          code: 500,
          message: "Something went wrong."
        });
      }
    }
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [DELETE] /api/v1/ticketDetails/delete/:id
const del = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const ticketDetailExists = await ticketDetailService.findById(id);
    if (!ticketDetailExists) {
      return res.json({
        code: 404,
        message: "Ticket detail id not found."
      });
    }

    await ticketDetailService.del(id);
    return res.json({
      code: 200,
      message: "Ticket detail was deleted successfully."
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

const ticketDetailController = {
  get,
  getById,
  create,
  update,
  del
};
export default ticketDetailController;