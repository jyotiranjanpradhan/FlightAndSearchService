const { CityRepository } = require("../repository/index");
class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }
  async createCity(data) {
    try {
      const city = await this.CityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Error in Service Layer");
      console.log(error);
    }
  }

  async deleteCity() {
    try {
      await this.CityRepository.DeleteCity(cityid);
      return true;
    } catch (error) {
      console.log("Error in Service Layer");
      console.log(error);
    }
  }
  async updateCity() {
    try {
      await this.CityRepository.UpdateCity({ cityid, names });
      return true;
    } catch (error) {
      console.log("Error in Service Layer");
      console.log(error);
    }
  }
  async getCity() {
    try {
      const response = this.CityRepository.GetCity(cityid);
      return response;
    } catch (error) {
      console.log("Error in Service Layer");
      console.log(error);
    }
  }
}

module.exports = CityService;
