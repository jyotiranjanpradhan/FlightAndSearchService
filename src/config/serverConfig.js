const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

module.exports = {
    PORT: process.env.PORT
};
