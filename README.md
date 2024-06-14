# HI, Am jyoti Ranjan Pradhan  Welcomes you To Flight Service

## Project Setup
- clone the project 
- Execute npm install on the same path on your root of cloned project 
-Create your .env file  and addign Following Variabels 
   - "PORT-Your free Port"

-create `config/config.json` on  root and add this code
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

-once you have added your db config as listed  above , go to src folder from your terminal and execute 'npx sequilize db:create'

     