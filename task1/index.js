// reimplement JS map function using plain js
// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];

//   function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
//   }
// console.log(persons.map((person)=>{
//     return getFullName(persons);
// }))
// This logs Malcom Reynolds,Kaylee Frye,Jayne Cobb

function myMap(collection, iteratee, context) {
  iteratee = iteratee.bind(context);
  const newCollection = [];
  for (const key in collection) {
    if (Object.hasOwnProperty.call(collection, key)) {
      const element = collection[key];
      newCollection.push(iteratee(element, key, collection));
    }
  }
  return newCollection;
}

module.exports = { myMap };
