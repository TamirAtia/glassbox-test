const dotenv = require("dotenv");
dotenv.config();
const { Sequelize } = require("sequelize");
const mysql = require("mysql2");

class DBConnection {
  constructor() {
    this.buildDB();
    this.sequelize = new Sequelize("test", "root", "qwerty", {
      host: "localhost",
      dialect: "mysql",
    });

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
      host: "localhost",
      user: "root",
      password: "qwerty",
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
      return;
    }
  };
}

module.exports = new DBConnection();
