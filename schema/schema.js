const typeDefs = `
    scalar NonEmptyString

    type Gender {
        id: ID!
        name: NonEmptyString!
        nameTranslate: NonEmptyString!
    }

    type Movie {
        id: ID!
        name: NonEmptyString!
        type: Gender!
    } 

    type Query {
        genders: [Gender!]!
        allMovies: [Movie!]!
        moviesByGender(genderId:ID!): [Movie]
    }

    input MovieInput {
        name: NonEmptyString!
        type: ID!
    }

    input UpdateMovieInput {
        id: ID!
        name: NonEmptyString!
        type: ID
    }

    type Mutation { 
        saveMovie(movie:MovieInput!): Movie
        delMovie(id: ID!): Boolean
        updateMovie(movie:UpdateMovieInput!): Movie
    }

`

export default typeDefs;

