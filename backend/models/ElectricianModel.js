import mongoose from "mongoose";

const ElectricianModel = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contactInfo: { type: String, required: true },
  },
  { timestamps: true }
);

const Electrician = mongoose.model("Electrician", ElectricianModel);

export default Electrician;
