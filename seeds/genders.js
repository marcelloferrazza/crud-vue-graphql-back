/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  
  await knex('genders').del();
  await knex('genders').insert([
    { id: 1, name: 'all', nameTranslate: "Todos" },
    { id: 2, name: 'action', nameTranslate: "Ação" },
    { id: 3, name: 'adventure', nameTranslate: "Aventura" },
    { id: 4, name: 'animation', nameTranslate: "Animação" },
    { id: 5, name: 'comedy', nameTranslate: "Comédia" },
    { id: 6, name: 'documentary', nameTranslate: "Documentário" },
    { id: 7, name: 'drama', nameTranslate: "Drama" },
    { id: 8, name: 'fiction', nameTranslate: "Ficção" },
    { id: 9, name: 'horror', nameTranslate: "Terror" },
    { id: 10, name: 'musical', nameTranslate: "Musical" },
    { id: 11, name: 'mystery', nameTranslate: "Suspense" },
    { id: 12, name: 'romance', nameTranslate: "Romance" },
    { id: 13, name: 'war', nameTranslate: "Guerra" },
    { id: 14, name: 'western', nameTranslate: "Faroeste" }
  ]);
}