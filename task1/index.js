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
    // First we check if it's an array or array like object
  if (Array.isArray(collection)) {
    const res = [];
    for (let i = 0; i < collection.length; i++) {
      res.push(iteratee.call(context, collection[i], i, collection));
    }
    return res;
  } 
  else { //ignored using typeOf collection === object && !Array.isArray(collection) due to test cases being passed
    const keys = Object.keys(collection);
    const res = [];
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const element = collection[keys[i]];
      res.push(iteratee.call(context, element, key, collection));
    }
    return res;
  }
}

module.exports = { myMap };
