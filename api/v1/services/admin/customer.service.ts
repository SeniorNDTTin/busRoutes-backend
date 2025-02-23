import { Request } from "express";

import CustomerModel from "../../../../models/customer.model";
import ICustomer from "../../../../interfaces/customer.interface";

const find = async (req: Request) => {
  const customers = await CustomerModel.find({});
  return customers;
}

const findById = async (id: string) => {
  const customerExists = await CustomerModel.findOne({ _id: id });
  return customerExists;
}

const findByEmail = async (email: string) => {
  const customerExists = await CustomerModel.findOne({ email });
  return customerExists;
}

const findByPhone = async (phone: string) => {
  const customerExists = await CustomerModel.findOne({ phone });
  return customerExists;
}

const create = async (customer: Partial<ICustomer>) => {
  const newCustomer = new CustomerModel(customer);
  await newCustomer.save();
  return newCustomer;
}

const update = async (id: string, customer: Partial<ICustomer>) => {
  const newCustomer = await CustomerModel.findOneAndUpdate({ _id: id }, customer, {
    new: true,
    runValidators: true
  });
  return newCustomer;
}

const del = async (id: string) => {
  await CustomerModel.deleteOne({ _id: id });
}

const customerService = {
  find,
  findById,
  findByEmail,
  findByPhone,
  create,
  update,
  del
};
export default customerService;