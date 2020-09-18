const bcrypt = require("bcryptjs");
const db = require('../database/dbConfig.js')

function find() {
  return db("users")
}

function add(user) {
  return db("users")
    .insert(user); 
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

module.exports ={
  find,
  add,
  findBy,
};