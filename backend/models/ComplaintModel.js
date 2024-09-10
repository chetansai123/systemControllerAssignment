import mongoose from "mongoose";

const ComplaintModel = new mongoose.Schema(
  {
    category: { type: String, required: true },
    description: { type: String, required: true },
    customerName: { type: String, required: true },
    customerAddress: { type: String, required: true },
    status: { type: String, default: "open" },
    assignedElectrician: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Electrician",
    },
  },
  { timestamps: true }
);

const Complaint = mongoose.model("Complaint", ComplaintModel);

export default Complaint;
