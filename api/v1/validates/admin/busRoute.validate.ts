import { NextFunction, Request, Response } from "express";

const create = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const name = req.body.name;
		const fullDistance = req.body.fullDistance;
		const fullPrice = req.body.fullPrice;
		const time = req.body.time;
		const firstFlightStartTime = req.body.firstFlightStartTime;
		const lastFlightStartTime = req.body.lastFlightStartTime;
		const timeBetweenTwoFlight = req.body.timeBetweenTwoFlight;

		if (
			!name ||
			!fullDistance ||
			!fullPrice ||
			!time ||
			!firstFlightStartTime ||
			!lastFlightStartTime ||
			!timeBetweenTwoFlight
		) {
			return res.json({
				code: 400,
				message: "Missing required information."
			});
		}

		if (
			typeof name !== "string" ||
			typeof fullDistance !== "number" ||
			typeof fullPrice !== "number" ||
			typeof time !== "string" ||
			typeof firstFlightStartTime !== "string" ||
			typeof lastFlightStartTime !== "string" ||
			typeof timeBetweenTwoFlight !== "string"
		) {
			return res.json({
				code: 400,
				message: "Missing datatype."
			});
		}

		return next();
	} catch {
		return res.json({
			code: 500,
			message: "Something went wrong."
		});
	}
}

const update = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const name = req.body.name;
		const fullDistance = req.body.fullDistance;
		const fullPrice = req.body.fullPrice;
		const time = req.body.time;
		const firstFlightStartTime = req.body.firstFlightStartTime;
		const lastFlightStartTime = req.body.lastFlightStartTime;
		const timeBetweenTwoFlight = req.body.timeBetweenTwoFlight;

		if (
			!name &&
			!fullDistance &&
			!fullPrice &&
			!time &&
			!firstFlightStartTime &&
			!lastFlightStartTime &&
			!timeBetweenTwoFlight
		) {
			return res.json({
				code: 400,
				message: "Missing required information."
			});
		}

		if (
			(name && typeof name !== "string") ||
			(fullDistance && typeof fullDistance !== "number") ||
			(fullPrice && typeof fullPrice !== "number") ||
			(time && typeof time !== "string") ||
			(firstFlightStartTime && typeof firstFlightStartTime !== "string") ||
			(lastFlightStartTime && typeof lastFlightStartTime !== "string") ||
			(timeBetweenTwoFlight && typeof timeBetweenTwoFlight !== "string")
		) {
			return res.json({
				code: 400,
				message: "Missing datatype."
			});
		}

		return next();
	} catch {
		return res.json({
			code: 500,
			message: "Something went wrong."
		});
	}
}

const busRouteValidate = {
	create,
	update
};
export default busRouteValidate;