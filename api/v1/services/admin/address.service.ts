import IAddress from "../../interfaces/address.interface";
import AddressModel from "../../models/address.model"

const find = async () => {
  const addresses = await AddressModel.find({});
  return addresses;
}

const findById = async (id: string) => {
  const address = await AddressModel.findOne({ _id: id });
  return address;
}

const create = async (address: Partial<IAddress>) => {
  const newAddress = new AddressModel(address);
  await newAddress.save();
  return newAddress;
}

const update = async (id: string, address: Partial<IAddress>) => {
  const newAddress = await AddressModel.findOneAndUpdate({
    _id: id
  }, address, {
    new: true,
    runValidators: true
  });
  return newAddress;
}

const del = async (id: string) => {
  await AddressModel.deleteOne({ _id: id });
}

const addressService = {
  find,
  findById,
  create,
  update,
  del
};
export default addressService;