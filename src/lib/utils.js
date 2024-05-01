const { default: mongoose } = require("mongoose");

const connection = {};

const connectToDb = async () => {
  try {
    if (connection.isConnnected) {
      console.log("Using existing connection");
      return;
    }

    const db = mongoose.connect(process.env.MONGO);
    connection.isConnnected = (await db).Connections[0].readyState; 
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = connectToDb;
