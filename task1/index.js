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
  if (!Array.isArray(collection) || typeof iteratee !== 'function') {
    throw new Error('Error');
  }
  const results = [];
  for (let i = 0; i < collection.length; i++) {
    const value = context
      ? iteratee.call(context, collection[i])
      : iteratee(collection[i]);
    results.push(value);
  }
  return results;
}

module.exports = { myMap };
