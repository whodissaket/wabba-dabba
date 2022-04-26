const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(
      "mongodb+srv://admin-saket:saket2000@cluster0.1po7s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      connectionParams
    );
    console.log("Connected to database.");
  } catch (error) {
    console.log("Could not connect to database.", error);
  }
};
