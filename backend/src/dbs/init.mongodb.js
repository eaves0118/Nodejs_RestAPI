const mongoose = require("mongoose");
const connectString = process.env.MONGO_URI;

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(connectString, { maxPoolSize: 50 })
      .then((_) => console.log("connected mongodb success"))
      .catch((err) => console.log(`err connected`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongoDB = Database.getInstance();
module.exports = instanceMongoDB;
