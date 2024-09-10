import * as ComplaintService from "../services/ComplaintService.js";

export const getComplaints = async (req, res, next) => {
  const complaints = await ComplaintService.getComplaints();
  if (complaints?.length > 0) {
    res.json(complaints);
  } else {
    res.status(404);
    throw new Error("data not found!");
  }
  next();
};

export const addComplaint = async (req, res, next) => {
  const { category, description, customerName, customerAddress } = req?.body;
  const details = { category, description, customerAddress, customerName };
  const complaint = await ComplaintService.addComplaint(details);
  if (complaint) {
    res.json(complaint);
  } else {
    res.status(404);
    throw new Error("data not added to DB!");
  }
  next();
};

export const deleteComplaint = async (req, res, next) => {
  const complaintId = req?.params?.id;
  const complaint = await ComplaintService.deleteComplaint(complaintId);
  if (complaint) {
    res.json(complaint);
  } else {
    res.status(404);
    throw new Error("data deletion error!");
  }
  next();
};
