import mongoose from "mongoose";
import Electrician from "../models/ElectricianModel.js";

export const getElectricians = async () => {
  const data = await Electrician.find({});
  return data;
};

export const getElectricianDetails = async (electricianId) => {
  const details = await Electrician.findById(electricianId);
  return details;
};

export const addElectrician = async (name, contactInfo) => {
  const electrician = new Electrician({ name, contactInfo });
  const addedElectrician = await electrician.save();
  return addedElectrician;
};

export const deleteElectrician = async (electricianId) => {
  const deletedElectrician = await Electrician.findByIdAndDelete(electricianId);
  console.log(deletedElectrician);
  if (!deletedElectrician) {
    return null;
  }
  return deletedElectrician;
};
