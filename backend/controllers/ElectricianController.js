import * as ElectricianService from "../services/ElectricianService.js";

export const getElectricians = async (req, res, next) => {
  const electricians = await ElectricianService.getElectricians();
  if (electricians?.length > 0) {
    res.json(electricians);
  } else {
    res.status(404);
    throw new Error("data not found!");
  }
  next();
};

export const getElectricianDetails = async (req, res, next) => {
  const electricianId = req?.query?.id;
  console.log(electricianId);
  const electricianDetails = await ElectricianService.getElectricianDetails(
    electricianId
  );
  if (electricianDetails) {
    res.json(electricianDetails);
  } else {
    res.status(404);
    throw new Error("data not found!");
  }
  next();
};

export const addElectrician = async (req, res, next) => {
  const { name, contactInfo } = req?.body;
  const data = await ElectricianService.addElectrician(name, contactInfo);
  if (data) {
    res.json(data);
  } else {
    res.status(404);
    throw new Error("data not added to DB!");
  }
  next();
};

export const deleteElectrician = async (req, res, next) => {
  const electricianId = req?.query?.id;
  const data = await ElectricianService.deleteElectrician(electricianId);
  if (data) {
    res.json(data);
  } else {
    res.status(404);
    throw new Error("data deletion error!");
  }
  next();
};
