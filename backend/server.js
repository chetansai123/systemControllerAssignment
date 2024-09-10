import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import { connectDb } from "./connections/db.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import electricianRoutes from "./routes/electricianRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";

await connectDb();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/electrician", electricianRoutes);
app.use("/complaint", complaintRoutes);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`app running successfully on PORT ${PORT}`);
});
