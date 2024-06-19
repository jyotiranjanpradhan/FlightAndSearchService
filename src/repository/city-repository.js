// src/repository/city-repository.js
const { where } = require("sequelize");
const { city } = require("../models"); // Ensure correct path

class CityRepository {
  //Create City
  async createCity({ name }) {
    try {
      const createdCity = await city.create({ name });
      return createdCity;
    } catch (error) {
      console.log(error.name);
    }
  }

  //Delete City
  async DeleteCity(cityid) {
    try {
      await city.destroy({
        where: {
          id: cityid,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  //Update City
  async UpdateCity({cityid, name}) {
    try {
      const cityname = await city.update({name:name}, {
        where: {
          id: cityid,
        },
      });
      return cityname;
    } catch (error) {
      console.log(error.name);
    }
  }

  //Get City
  async GetCity({cityid}) {
    try {
      const cityname=await city.findByPk(cityid);
      return city;
    } catch (error) {
      console.log("some Error in Getting city ");
      console.log(error.name);
    }
  }
}

module.exports = CityRepository;
