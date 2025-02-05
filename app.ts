import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import country from "./src/routes/country";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5006;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/", country);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;
