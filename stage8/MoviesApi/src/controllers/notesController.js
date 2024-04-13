
    const knex = require("../database/knex");
    const AppError = require("../utils/AppError.js");

    class NotesController{
        async create(request, response){
            const { title, description, rating, tags} = request.body;
            const { user_id } = request.params;

            if(rating < 1 || rating > 5){
                throw new AppError("Ixi deu ruim! A nota vai de 1 até 5.", 209);
            }


            const [note_id] = await knex("movie_notes").insert({
                title,
                description,
                rating,
                user_id
            });

            console.log({title, description, rating, user_id});


            const tagsArrayManipulation = tags.map(name => {
                return{
                        note_id,
                        name, 
                        user_id        
                }
            });

            await knex("tags").insert(tagsArrayManipulation);

            response.json();
        }

        async delete(request, response){

            // check se existe *****

            const { id } = request.params;

            await knex("movie_notes").where({id}).delete();

            return response.json();
        }

        async show(request, response){
            const { user_id } = request.params;

            // tags e notas relacionadas aquele id...

            console.log(user_id)

            const notes = await knex("movie_notes").where({user_id}).first();
            const tags = await knex("tags").where({user_id});

            response.json({ notes, tags});
            
        
        }

        async index(request, response){
            // buscar notas com base em alguns filtros...

            const { user_id, title, tags } = request.query;


            let notes;

            if(tags){
               
                const filterTags = tags.split(",").map(tag => tag.trim());

                notes = await knex("tags")
                .select([
                    "movie_notes.id",
                    "movie_notes.title",
                    "movie_notes.user_id"
                ])
                .where("movie_notes.user_id", user_id)
                .whereLike("movie_notes.title", `%${title}%`)
                .whereIn("name", filterTags)
                .orderBy('movie_notes.title')
                .innerJoin("movie_notes", "movie_notes.id", "tags.note_id");

                
            }else{
                notes = await knex("movie_notes").where({user_id}).orderBy("title").whereLike("title", `%${title}%`)
            }

            const indexTags = await knex("tags").where({user_id});

            const indexNotesWithTags = notes.map(note => {
                const returnWithTags = indexTags.filter(tag => tag.note_id === note.id);

                return {
                    ...notes,
                    tags: returnWithTags
                }
            })
           
            return response.json({indexNotesWithTags});

            
        }
        
        

    }

    module.exports = NotesController;