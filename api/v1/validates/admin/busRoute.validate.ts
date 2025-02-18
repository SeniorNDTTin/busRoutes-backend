import { error } from "console";
import {NextFunction ,Request, Response } from "express";
import Joi from "joi"

const create = async (req: Request, res: Response, next: NextFunction) => {
    const correctCondition = Joi.object({
        name: Joi.string().required().max(50).trim().strict(),
        fullDistance: Joi.number().required().min(0),
        fullPrice: Joi.number().required().min(0),
        time: Joi.string().required().max(50).trim().strict(),
        firstFlightStartTime: Joi.string().required().max(50).trim().strict(),
        lastFlightStartTime: Joi.string().required().max(50).trim().strict(),
        TimeBetweenTwoFlight: Joi.string().required().max(50).trim().strict(),
    })

    try{
        //abortEarly : true =>đè lỗi , false : trả về nhiều lỗi
        await correctCondition.validateAsync(req.body , {abortEarly: false})
        next()
    }catch(error){
        res.status(422).json({
            status: 422,
            errors: error instanceof Error ? error.message : "Unknown validation error"
        })
    }
}

const busRouteValidation = { create}
export default busRouteValidation