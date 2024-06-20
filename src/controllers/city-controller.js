const { CityService } = require("../services/index");

const cityService = new CityService();

//post-->cityname as body params

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully Creaated City ",
      err: {},
    });
  } catch (error) {
    console.log("some error on controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not Able To Create City ",
      err: error,
    });
  }
};

//Delete -->cityid as query params
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);

    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted City",
      err: {},
    });
  } catch (error) {
    console.log("some error on controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete City",
      err: error,
    });
  }
};

//GET --> /city/:cityid as query params
const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.cityid);
    return res.status(200).json({
      data: response,
      message: "Successfully retrive data ",
      err: {},
      success: true,
    });
  } catch (error) {
    console.log("some error on controller");
    return res.status(500).json({
        data:{},
        message:"some error on controller",
        err:error,
        success:false
    })
  }
};

//Patch --> cityid as quryparams and cityname as body params
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.cityid, req.body);

    return res.send(201).json({
      data: response,
      success: true,
      err: {},
      message: "Update  city name successfully ",
    });
  } catch (error) {
    console.log("some error on controller");
    res.send(500).json({
      data: {},
      message: "Some error is there",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
};
