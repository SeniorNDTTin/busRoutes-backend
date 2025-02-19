import { Request, Response } from "express";
import wardService from "../../services/admin/ward.service";
import districtService from "../../services/admin/district.service";

// [GET] /api/v1/admin/wards/get
const get = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const wards = await wardService.find(req);
    return res.json({
      code: 200,
      message: "Wards found.",
      data: wards
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /api/v1/admin/wards/get/:id
const getById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const wardExists = await wardService.findById(id);
    if (!wardExists) {
      return res.json({
        code: 404,
        message: "Ward id not found."
      });
    }

    return res.json({
      code: 200,
      message: "Ward found.",
      data: wardExists
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [POST] /api/v1/admin/wards/create
const create = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const name: string = req.body.name;
    const districtId: string = req.body.districtId;

    const districtExists = await districtService.findById(districtId);
    if (!districtExists) {
      return res.json({
        code: 404,
        message: "District id not found."
      });
    }

    const newWard = await wardService.create({
      name,
      districtId
    });
    return res.json({
      code: 201,
      message: "Ward was created successfully.",
      data: newWard
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [POST] /api/v1/admin/wards/update/:id
const update = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const name: string = req.body.name;
    const districtId: string = req.body.districtId;

    const [
      wardExists,
      districtExists
    ] = await Promise.all([
      wardService.findById(id),
      districtService.findById(districtId)
    ]);
    if (!wardExists) {
      return res.json({
        code: 404,
        message: "Ward id not found."
      });
    }
    if (districtId && !districtExists) {
      return res.json({
        code: 404,
        message: "District id not found."
      });
    }

    const newWard = await wardService.update(id, {
      name,
      districtId
    });
    return res.json({
      code: 200,
      message: "Ward was updated successfully.",
      data: newWard
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [DELETE] /api/v1/admin/wards/delete/:id
const del = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    const id: string = req.params.id;

    const wardExists = await wardService.findById(id);
    if (!wardExists) {
      return res.json({
        code: 404,
        message: "Ward id not found."
      });
    }

    await wardService.del(id);
    return res.json({
      code: 200,
      message: "Ward was deleted successfully."
    });
  } catch {
    return res.json({
      code: 500,
      message: "Something went wrong."
    });
  }
}

// [GET] /api/v1/admin/wards/district/:districtId
const getWardsByDistrict = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { districtId } = req.params; // Lấy districtId từ params
    const wards = await wardService.findByDistrict(districtId); // Tìm ward theo districtId
    return res.json({ 
      code: 200, 
      message: "Wards found.", 
      data: wards 
    });
  } catch (error) {
    return res.json({ 
      code: 500, 
      message: "Something went wrong." 
    });
  }
};

const wardController = {
  get,
  getById,
  create,
  update,
  del,
  getWardsByDistrict
};
export default wardController;