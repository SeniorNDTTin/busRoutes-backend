import AddressModel from "../../models/address.model";

const find = async () => {
  const addresses = await AddressModel.find({});
  return addresses;
}

const addressService = {
  find
};
export default addressService;