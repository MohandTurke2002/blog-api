const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://MohandHany:ttuurrkkyy2002@cluster0.pk6jbgm.mongodb.net/"
    );
    console.log("connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
