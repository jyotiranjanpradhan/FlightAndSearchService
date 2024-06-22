const { CityRepository } = require("../repository/index"); // Ensure correct path

class CityService {
  // Using a constructor for learning purposes, but it can also be done without it by directly creating an instance of CityRepository
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity({ name }) {
    try {
      const city = await this.cityRepository.createCity({ name });
      return city;
    } catch (error) {
      console.error("Error in Service Layer createCity:", error);
      throw error; // Rethrow error to handle it at a higher level
    }
  }

  async deleteCity(cityId) {
    try {
      const deleted = await this.cityRepository.deleteCity(cityId);
      return deleted;
    } catch (error) {
      console.error("Error in Service Layer deleteCity:", error);
      throw error; // Rethrow error to handle it at a higher level
    }
  }

  async updateCity({ cityid, name }) {
    try {
      const updated = await this.cityRepository.updateCity({cityid, name});
      return updated;
    } catch (error) {
      console.error("Error in Service Layer updateCity:", error);
      throw error; // Rethrow error to handle it at a higher level
    }
  }

  async getCity(cityid) {
    try {
      const city = await this.cityRepository.getCity(cityid);
      return city;
    } catch (error) {
      console.error("Error in Service Layer getCity:", error);
      throw error; // Rethrow error to handle it at a higher level
    }
  }
  async getcities(){
    try {
      const cities=await this.cityRepository.getcities();
      return cities;
    } catch (error) {
      console.error("Error in Service Layer getCities:", error);
      throw error;
      
    }
  }
}

module.exports = CityService;
