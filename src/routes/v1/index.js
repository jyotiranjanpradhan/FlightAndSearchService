const express = require("express");
const cityController = require("../../controllers/city-controller");
const router = express.Router();

router.get("/city/:cityid",cityController.get);
router.get("/getCities",cityController.getcities)
router.post("/addCity", cityController.create);
router.delete("/deleteCity/:id",cityController.destroy);
router.patch("/updateCity/:cityid",cityController.update);

 
module.exports = router;
 