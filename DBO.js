const dotenv = require("dotenv");
dotenv.config();
const { Sequelize, DataTypes } = require("sequelize");
// const { now } = require('sequelize/types/utils');
const mysql = require("mysql2");

class DBConnection {
  constructor() {
    this.buildDB();
    this.sequelize = new Sequelize(
      'test',
      'root',
      'qwerty',
      {
        host:'localhost',
        dialect: "mysql",
      }
    );
    // this.db.config({acquireTimeout:30000})
    this.checkConnection();
    this.sequelize.sync();
  }

  async checkConnection() {
    try {
      await this.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
  buildDB = async () => {
    // Open the connection to MySQL server
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'qwerty',
    });
    try {
      this.connection.connect();
      // Run create database statement
      this.connection.query(
        `CREATE DATABASE IF NOT EXISTS test;`,
        (err, results) => {
          console.log(results);
          console.log(err);
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      // Close the connection
      this.connection.end();
      return
    }
  };
}
// like ENUM
const HttpStatusCodes = Object.freeze({
  ER_TRUNCATED_WRONG_VALUE_FOR_FIELD: 422,
  ER_DUP_ENTRY: 409,
});

module.exports = new DBConnection();
