import Electrician from "../models/ElectricianModel.js";
import Complaint from "../models/ComplaintModel.js";

export const assignComplaint = async () => {
  const electricians = await Electrician.find();
  const unassignedComplaints = await Complaint.find({
    assignedElectrician: null,
  });

  if (electricians.length && unassignedComplaints.length) {
    const electrician = electricians.shift();
    electricians.push(electrician); // Round-robin assignment
    return electrician;
  }

  return null;
};
