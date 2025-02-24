import DirectionModel from "../../../../models/direction.model"

const find = async () => {
  const directions = await DirectionModel.find({});
  return directions;
}

const findById = async (id: string) => {
  const directionExists = await DirectionModel.findOne({ _id: id });
  return directionExists;
}

const directionService = {
  find,
  findById
};
export default directionService;