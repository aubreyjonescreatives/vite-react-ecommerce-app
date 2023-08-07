const express = require('express'); 
const sequelize = require('./config/connection');
  
require('dotenv').config(); 

const app = express(); 

const PORT = process.env.PORT || 5500; 


sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`); 
    }); 
}); 

