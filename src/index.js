const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require('./config/serverConfig'); // Import PORT after dotenv is configured

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`${PORT} started`);
        
    });
};

setupAndStartServer();

