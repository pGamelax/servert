import { DataTypes, Sequelize } from "sequelize";

console.log(process.env.HOST)
console.log(process.env.USERNAME)
console.log(process.env.PASSWORD)
export const sequelize = new Sequelize(process.env.DATABASE, process.env.USERPS, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  dialectOptions:{
    ssl:{
      rejectUnauthorized: true,
    }
  }
});


export const Clients = sequelize.define("clients", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  niche: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  meet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sendEmail: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

Clients.sync()