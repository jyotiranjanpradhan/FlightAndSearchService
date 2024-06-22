const { City } = require("../models/index"); // Ensure the correct path and model name

class CityRepository {
  // Create City
  async createCity( name ) {
    try {
      const createdCity = await City.create( name );
      return createdCity;
    } catch (error) {
      console.error("Error in createCity:", error);
      throw error;
    }
  }

  // Delete City
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.error("Error in deleteCity:", error);
      throw error;
    }
  }

  // Update City
  async updateCity({ cityid, name }) {
    try {
      const city = await City.update(
        { name },
        {
          where: {
            id: cityid,
          },
        }
      );
      return city;
    } catch (error) {
      console.error("Error in updateCity:", error);
      throw error;
    }
  }

  // Get City
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      if (!city) {
        throw new Error(`City with id ${cityId} not found`);
      }
      return city;
    } catch (error) {
      console.error("Error in getCity:", error.message || error);
      throw error;
    }
  }
  async getcities(){
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.error("Error in getCities:", error.message || error);
      throw error;
    }
  }
  
}

module.exports = CityRepository;
