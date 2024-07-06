import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";


// App configuration
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDB();


//API endpoint
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));


// Routes
app.get("/", (req, res) => {
  res.send("API Working");
});

// Server start
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
