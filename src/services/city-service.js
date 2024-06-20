const { CityRepository } = require("../repository/index"); // this file contain all the repository file as object just destructure it and use  repository

class CityService {
  //i use constructor here for Learning perpose but we can also use without constrctor :->"const cityrepo=new CityRepository();" Then use cityrepo as object and use function of  CityRepository;
    
  constructor() {
    
    this.CityRepository = new CityRepository();
  }
  async createCity(data) {
    try {
      const city = await this.CityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Error in Service Layer createCity");
      console.log(error);
    }
  }

  async deleteCity(cityid) {
    try {
      await this.CityRepository.DeleteCity(cityid);
      return true;
    } catch (error) {
      console.log("Error in Service Layer deleteCity");
      console.log(error);
    }
  }
  async updateCity({ cityid, names }) {
    try {
      await this.CityRepository.UpdateCity({ cityid, names });
      return true;
    } catch (error) {
      console.log("Error in Service Layer updateCity");
      console.log(error);
    }
  }
  async getCity(cityid) {
    try {
      const response = this.CityRepository.GetCity(cityid);
      return response;
    } catch (error) {
      console.log("Error in Service Layer getCity");
      console.log(error);
    }
  }
}

module.exports = CityService;
