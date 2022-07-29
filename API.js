//API: Application programming interface;
//The data we want to send them to frontend as API 
const profile =  {
    forename: 'Parsa',
    surname: 'Tadbiri',
    age: 15,
    email: 'pa*******iri@gmail.com',
    wallet: '15.00$',
    skills: 'Node.js, JavaScript',
};
const items = [
    { id: 01, sort: 'movies', title: '12 Angry Men', rating: 9.0 },
    { id: 02, sort: 'movies', title: 'Inception', rating: 8.8 },
    { id: 03, sort: 'movies', title: 'Interstellar', rating: 8.6 },
    { id: 04, sort: 'movies', title: 'The Father', rating: 8.2 },
    { id: 05, sort: 'movies', title: 'Shutter Island', rating: 8.2 },
    { id: 06, sort: 'movies', title: 'Se7en', rating: 8.6 },
    { id: 07, sort: 'movies', title: 'The Shawshank Redemption', rating: 9.3 },
];
const reviews = [
    { review: 'Such a nice movie!' },
    { review: 'The best movie I have ever seen!' },
    { review: 'Fantastic and thoughtful!' },
    { review: 'Could be better!' },
];
const watchList = [
    { Id: 01, userRating: 6 },
    { Id: 04, userRating: 7 },
    { Id: 07, userRating: 9 },
    { Id: 03, userRating: 10 },
];
module.exports = { profile, reviews, items, watchList };
/* in ecmascript
    export {profile, reviews, items, watchList }
*/