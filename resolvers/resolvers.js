import { NonEmptyStringResolver } from "graphql-scalars";

const resolvers = {
    NonEmptyString: NonEmptyStringResolver,

    Movie: { 
        type: async(parent, args, context) => { 
            console.log(parent)
           const { db } = context;
            return await db("genders").where("id", parent.type).first();       

        }
    },  // Resolver unicamente criado para resolver campo type de movie: inserir o objeto gender no type dos movies. 
        // Uma solução mais simples seria alterar o schema, fazendo type estar esperando um "ID".



    Query: {
        genders: async(parent, args, context) => { 
           const { db } = context;
           return await db("genders").select("*");
        },
        
        allMovies: async(parent, args, context)=> {
            const { db } = context;
            return await db("movies").select("*")
        } ,
        moviesByGender: async (parent, { genderId }, { db }) => {
            return await db("movies").where("type", genderId).select("*");
          },
    },

    Mutation: { 
        saveMovie: async(parent, args, context) => { 
            const{ db } = context;
            const { movie } = args;
            const [newMovie] = await db("movies").insert(movie).returning("*")
            return newMovie;
        },

        delMovie: async(parent, args, context) => {
            const{ db } = context;
            const { id } = args;
            await db("movies").where("id", id).del().returning("*");
            return true;
        },

        updateMovie: async(parent, args, context) => {
            const{ db } = context;
            const{ movie } = args;
            const { id, ...updates } = movie;
            console.log(updates)
          
            const [editMovie] = await db("movies").where("id", id).update(updates).returning("*");
            return editMovie;
        }

    }

};

export default resolvers;
