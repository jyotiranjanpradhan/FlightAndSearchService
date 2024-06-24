# HI, Am jyoti Ranjan Pradhan  Welcomes you To Flight Service

## Project Setup
- clone the project 
- Execute npm install on the same path on your root of cloned project 
-Create your .env file  and addign Following Variabels 
   - "PORT-Your free Port"

-just run `npx sequilize init` on outside of src it automatically create config,migration ,models,seeders folder and  bring  all these into src
   ```
{
  "development": {
    "username": <Your user Name>,
    "password": <Your password>,
    "database": "FlightSearch_db_development",
    "host": "127.0.0.1",
    "dialect": "mysql" 
  }
}
   ```

-once you have added your db config as listed  above , go to src folder from your terminal and execute `npx sequelize db:create`


`npx sequelize db:migrate`


## DB Designs
 -Airplane Table
 -Flight
 -Airport
 -City

 -A flight belongs to one Airplane but One Airplane can have multiple Flights
 -A city has many airports but one airport belongs to a city
 -A airport can have many flights,but a flight belongs to one airport


 ## Tables
 
 ### City --> id,name,created_at, updated_at
 ### Airport -->id,name, address,city_id,created_at,updated_at
       Relationship-->city has many airports and airport bellongs to a city (one to many)