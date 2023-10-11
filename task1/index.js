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
    let newArr = [];
    for (var key in collection) {
      if (collection.hasOwnProperty(key)) {
        newArr.push(iteratee.call(context, collection[key], key, collection));
      }
    }
    return newArr;
}

module.exports = { myMap };
