import express from "express";
import "dotenv/config";
import cors from "cors";

import gameRoutes from "./routes/game.route.js";
import { connectDB } from "./config/db.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/api/game", gameRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
