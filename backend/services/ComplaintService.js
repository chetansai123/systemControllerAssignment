import Complaint from "../models/ComplaintModel.js";
import { assignComplaint } from "./ComplaintAssignmentService.js";

export const getComplaints = async () => {
  const complaints = await Complaint.find().populate("assignedElectrician");
  return complaints;
};

export const addComplaint = async (details) => {
  const { category, description, customerAddress, customerName } = details;
  const complaint = new Complaint({
    category,
    description,
    customerName,
    customerAddress,
  });

  const assignedElectrician = await assignComplaint();
  if (assignedElectrician) {
    complaint.assignedElectrician = assignedElectrician._id;
  }

  const savedData = await complaint.save();
  return savedData;
};

export const deleteComplaint = async (complaintId) => {
  const complaint = await Complaint.findById(complaintId);
  let removedData;
  if (complaint) {
    removedData = await complaint.remove();
  }
  return removedData;
};
