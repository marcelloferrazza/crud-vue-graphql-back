const typeDefs = `
    type Gender {
        id: ID!
        name: String!
        nameTranslate: String!
    }

    type Movie {
        id: ID!
        name: String!
        type: Gender!
    } 

    type Query {
        genders: [Gender!]!
        allMovies: [Movie!]!
        moviesByGender(genderId:ID!): [Movie]
    }

    input MovieInput {
        name: String!
        type: ID!
    }

    input UpdateMovieInput {
        id: ID!
        name: String
        type: ID
    }

    type Mutation { 
        saveMovie(movie:MovieInput!): Movie
        delMovie(id: ID!): Boolean
        updateMovie(movie:UpdateMovieInput!): Movie
    }

`

export default typeDefs;

