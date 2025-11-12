const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECOND = 5000;

//Count connect
const countConnect = () => {
  const numberConnection = mongoose.connections.length;
  console.log(`Number of connection::${numberConnection}`);
};

//Check overload
const checkOverload = () => {
  setInterval(() => {
    const numberConnection = mongoose.connections.length;
    const numberCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    console.log(`Active connection ${numberConnection}`);
    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);
    const maxConnection = numberCores * 5;
    if (numberConnection > maxConnection) {
      console.log(`Connection overload detected`);
    }
  }, _SECOND);
};

module.exports = {
  countConnect,
  checkOverload,
};
