import express from "express";
import { Request, Response } from "express";
import busRoutesService from "../../services/admin/busRoute.service";
import IBusRoutes from "../../interfaces/busRoute.interface";

const app = express();
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));

const create = async (req : Request , res: Response) => {
    try{
         const data = {
            name: String(req.body.name),
            fullDistance: Number(req.body.fullDistance),
            fullPrice: Number(req.body.fullPrice), 
            // fullDistance: isNaN(Number(req.body.fullDistance)) ? 0 : Number(req.body.fullDistance),
            // fullPrice: isNaN(Number(req.body.fullPrice)) ? 0 : Number(req.body.fullPrice),
            time: String(req.body.time),
            firstFlightStartTime: String(req.body.firstFlightStartTime),
            lastFlightStartTime: String(req.body.lastFlightStartTime),
            TimeBetweenTwoFlight: String(req.body.TimeBetweenTwoFlight)
        }
    
        const newBusRoutes= await busRoutesService.create(data);
        if(newBusRoutes){
            return res.json({
                data:{
                    status: 201,
                    message: "Bus route was created successfully.",
                    data: data
                }
              });
        }else{
            return res.json({ status:400, message: "Failed to create bus route.Try again later , please" })
        }

    }catch(err){
        return res.json({
            status: 500,
            message: "Something went wrong." + err
          });
    }
   
}

const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
      const id: string = req.params.id;
  
      const busRoute = await busRoutesService.findById(id);
      if (!busRoute) {
        return res.json({
          code: 404,
          message: "Bus route id not found."
        });
      }
  
      return res.json({
        code: 200,
        message: "Bus route found.",
        data: busRoute
      });
    } catch {
      return res.json({
        code: 500,
        message: "Something went wrong."
      });
    }
}

const getAll = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
      const busRoute = await busRoutesService.find();
        console.log(busRoute)
      if(!busRoute) return res.json({'status' : 400, 'message' : 'No data found.'})

      return res.json({
        status: 200,
        message: "Bus routes found.",
        data: busRoute
      });
    } catch {
      return res.json({
        status: 500,
        message: "Something went wrong."
      });
    }
}

const update = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
      const id: string = req.params.id;
  
      const data = {
        name: String(req.body.name),
        fullDistance:Number(req.body.fullDistance),
        fullPrice:Number(req.body.fullPrice),
        time: String(req.body.time),
        firstFlightStartTime: String(req.body.firstFlightStartTime),
        lastFlightStartTime: String(req.body.lastFlightStartTime),
        TimeBetweenTwoFlight: String(req.body.TimeBetweenTwoFlight)
    }
  
      const busRoute = await busRoutesService.findById(id);
    
      if (!busRoute) {
        return res.json({
          code: 404,
          message: "Bus route id not found."
        });
      }

      const updateBus = await busRoutesService.update(id, data);
      return res.json({
        status: 200,
        message: "Bus route was updated successfully.",
        data: updateBus
      });
    } catch {
      return res.json({
        code: 500,
        message: "Something went wrong."
      });
    }
}

const del = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const id: string = req.params.id;

        const busRoute = await busRoutesService.findById(id);
        if (!busRoute) {
          return res.json({
            code: 404,
            message: "Bus route id not found."
          });
        }else{
            await busRoutesService.del(id);
            return res.json({
              code: 200,
              message: "Bus route was deleted successfully."
            });
        }
    
    } catch {
      return res.json({
        code: 500,
        message: "Something went wrong."
      });
    }
}
const busRouteController = {create , getById, getAll, update, del}
export default busRouteController
    
