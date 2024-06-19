// src/repository/city-repository.js
const { where } = require('sequelize');
const {city}   = require('../models'); // Ensure correct path

class CityRepository {
  async createCity({ name }) {
    try {
      const createdCity = await city.create({ name });
      return createdCity;
    } catch (error) {
      console.log(error.name);
    }
  }
  async DeleteCity({cityid}){
    try {
      await city.destroy({
        where:{
          id:cityid
        }
      })
    } catch (error) {
      console.log(error);
      
    }
  }
}

module.exports = CityRepository;
