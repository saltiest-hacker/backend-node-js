const db = require("../../data/dbConfig");

module.exports = {
  add,
  get,
  getAll,
  remove,
};

function add(comment) {
  return db("comments").insert(comment);
}

function get(id) {
  return db("comments").where({ id }).first();
}

function getAll(id) {
  return db("comments").where("users_id", "=", id);
}

function remove(id) {
  return db("comments").where({ id }).del();
}
