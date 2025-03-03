import { ETicketDetailType } from "../enums/ticketDetail.enum";

interface ITicketDetail {
  type: ETicketDetailType;
  date: string;
  ticketId: string;
  scheduleId: string;
};

export default ITicketDetail;