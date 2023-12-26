import { app } from "./app.js";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";
connectDB();
app.listen(process.env.PORT, () => {
  console.log(
    `server is working on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
