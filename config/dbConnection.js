import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    let db = await mongoose.connect("mongodb://127.0.0.1:27017/expensesDb");
    console.log(
      `MongoDB is connected successfully on port ${db.connection.host}`
    );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
