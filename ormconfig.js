const process = require('process');
const username = process.env.POSTGRES_USER || "test";
const password = process.env.POSTGRES_PASSWORD || "test";
module.exports = {
  "type": "postgres",
  "host": "localhost",
  "port": 5433,
  username,
  password,
  "database": "hoge",
  "synchronize": true,
  "dropSchema": false,
  "logging": true,
  "entities": [__dirname + "/src/**/*.entity.ts", __dirname + "/dist/**/*.entity.js"],
  "migrations": ["migrations/**/*.ts"],
  "subscribers": ["subscriber/**/*.ts", "dist/subscriber/**/.js"],
  "cli": {
    "entitiesDir": "src",
    "migrationsDir": "migrations",
    "subscribersDir": "subscriber"
  }
}
