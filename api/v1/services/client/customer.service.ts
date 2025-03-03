import ICustomer from "../../../../interfaces/customer.interface";

import CustomerModel from "../../../../models/customer.model";

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

const customerService = {
  findById,
  findByEmail,
  findByPhone,
  create
};
export default customerService;