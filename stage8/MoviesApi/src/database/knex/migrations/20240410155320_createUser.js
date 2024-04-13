
    exports.up = knex => knex.schema.createTable("user", table => {
        table.increments("id");
        table.varchar("name");
        table.varchar("email");
        table.varchar("password");
        table.varchar("avatar");
        table.timestamp("created_at").default(knex.fn.now());
    });

    exports.down = knex => knex.schema.dropTable("user");
