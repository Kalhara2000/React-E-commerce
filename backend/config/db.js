import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://KalharaAlgo:GREMCCkIxhYiNNIP@kalhara00.igsiuzf.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};
