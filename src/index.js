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
    // await repo.createCity({ names: "Puri" }); // For Create City 
    // await repo.DeleteCity({cityid:13}) // Delete City According to Id
    // await repo.UpdateCity({cityid:1,names:"Bhubaneswar"}) //Update City Name According to cityId
    // await repo.GetCity(1) // Get City Name By ID

    } catch (error) {
      throw { error };
    }
  });
};

setupAndStartServer();
