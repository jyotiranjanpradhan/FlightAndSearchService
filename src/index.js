// src/index.js
const express = require("express");
const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");

const setupAndStartServer = async () => {
  const app = express();

  app.listen(PORT, async () => {
    try {
      console.log(`${PORT} started`);
      const repo = new CityRepository();
      // await repo.createCity({ name: "NewDelhi" }); // For Create City 
      // await repo.DeleteCity({cityid:13}) // Delete City According to Id
    } catch (error) {
      throw { error };
    }
  });
};

setupAndStartServer();
