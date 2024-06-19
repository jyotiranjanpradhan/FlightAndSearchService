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
      const response = await this.CityRepository.DeleteCity(cityid);
      return response;
    } catch (error) {
      console.log("Error in Service Layer");
      console.log(error);
    }
  }
  async updateCity() {
    try {
      const response = await this.CityRepository.UpdateCity({ cityid, names });
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
