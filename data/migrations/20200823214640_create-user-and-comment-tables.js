exports.up = function (knex) {
  return knex.schema
    .createTable("users", (users) => {
      users.increments();

      users.string("username", 255).notNullable().unique();
      users.string("password", 255).notNullable();
    })
    .createTable("comments", (comments) => {
      comments.increments();

      comments.string("username", 255).notNullable();
      comments.float("comment_toxicity").notNullable();
      comments.string("comment", 510).notNullable();
      comments
        .integer("users_id")
        .notNullable()
        .references("users.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("comments").dropTableIfExists("users");
};
