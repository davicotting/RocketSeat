
    
    exports.up = knex => knex.schema.createTable("movie_notes", table => {
        table.increments("id");
        table.varchar("title");
        table.varchar("description");
        table.integer("rating");
        table.integer("user_id").references("id").inTable("user").onDelete("CASCADE");
        table.timestamp("created_at").default(knex.fn.now());
        table.timestamp("updated_at").default(knex.fn.now());
    });


    exports.down = knex => knex.schema.dropTable("movie_notes");

