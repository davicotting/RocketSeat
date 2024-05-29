
    
    const knex = require("../database/knex");

    /*

    [note_id] retorna o id da nota que foi 
    inserido no banco de dados, 
    ou seja se na mesma nota eu enviar dois 
    ou mais links e tags, eles terao o mesmo note_id;

    */

    class NotesController{

        async show(request, response){
            const { id } = request.params;

            const note = await knex("notes").where({ id }).first();
            const tags = await knex("tags").where({ note_id: id}).orderBy("name");
            const links = await knex("links").where({ note_id: id}).orderBy("created_at");

            return response.json({...note, tags, links});
        }

       async create(request, response){

            const { title, description, links, tags } = request.body;
            const { user_id } = request.params;

            const [note_id] = await knex("notes").insert({
                title,
                description,
                user_id
            })

            const linksInsert = links.map(link => {
                return{
                    note_id,
                    url: link
                }


            })

            await knex("links").insert(linksInsert);


            const tagsInsert = tags.map(name => {
                return{
                    note_id,
                    name,
                    user_id
                }})


            await knex("tags").insert(tagsInsert);

            return response.json();
       }

       async delete(request, response){
            const { id } = request.params;

            await knex("notes").where({id}).delete();

            return response.json();
       }

       async index(request,response){

            const { user_id, title, tags} = request.query;

            console.log(request.query);

            let notes;

            if(tags){

                const filterTags = tags.split(",").map(tag => tag.trim());

                notes = await knex("tags")
                .select([
                    "notes.id",
                    "notes.title",
                    "notes.user_id"
                ])
                .where("notes.user_id", user_id)
                .whereLike("notes.title", `%${title}%`)
                .whereIn("name", filterTags)
                .innerJoin("notes", "notes.id", "tags.note_id")
                .orderBy("notes.title")


                console.log(notes);

                
            } else{

                notes = await knex("notes")
                .where({user_id})
                .whereLike("title", `%${title}%`)
                .orderBy("title");

            }

            const userTags = await knex("tags").where({user_id});

            const notesWithTags = notes.map(note => {
                // note.id esta vindo desse map acima 
                const noteTags = userTags.filter(tag => tag.note_id === note.id);
                return {
                    ...notes,
                    tags: noteTags
                }
            })

            
            return response.json(notesWithTags); 

           
       }

    }   

    module.exports = NotesController;