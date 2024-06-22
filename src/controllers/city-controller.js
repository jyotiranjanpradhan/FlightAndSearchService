const { CityService } = require("../services/index");

const cityService = new CityService();

// POST -> city name as body params
const create = async (req, res) => {
  try {
    const city = await cityService.createCity({ name: req.body.name });
    console.log(req.body.name );
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully Created City",
      err: {},
    });
  } catch (error) {
    console.error("Error in controller create:", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not Able To Create City",
      err: error,
    });
  }
};

// DELETE -> city id as query params
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully Deleted City",
      err: {},
    });
  } catch (error) {
    console.error("Error in controller destroy:", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not Able To Delete City",
      err: error,
    });
  }
};

// GET -> /city/:cityid as query params
const get = async (req, res) => {
  try { 
    const response = await cityService.getCity(req.params.cityid);
   
    return res.status(200).json({
      data: response,
      message: "Successfully Retrieved Data",
      err: {},
      success: true,
    });
  } catch (error) {
    console.error("Error in controller get:", error);
    return res.status(500).json({
      data: {},
      message: "Some error on controller",
      err: error,
      success: false,
    });
  }
};

// PATCH -> city id as query params and city name as body params
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity({
      cityid: req.params.cityid,
      name: req.body.name,
    });
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Updated City Name Successfully",
    });
  } catch (error) {
    console.error("Error in controller update:", error);
    return res.status(500).json({
      data: {},
      message: "Some error is there",
      err: error,
      success: false,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
};
