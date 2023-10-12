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

// function customMap(arr, callback) {
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//       result.push(callback(arr[i], i, arr));
//     }
//     return result;
//   }

const each = (collection, iteratee, context) => {
  if (Array.isArray(collection)) {
    // Iterate over an array
    for (let i = 0; i < collection.length; i++) {
      iteratee.call(context, collection[i], i, collection);
    }
  } else if (typeof collection === 'object') {
    // Iterate over an object
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        iteratee.call(context, collection[key], key, collection);
      }
    }
  }

  return collection;
};

function myMap(collection, iteratee, context) {
  let res = [];
  each(collection, function (el, key, collection) {
    res.push(iteratee.call(context, el, key, collection));
  });

  return res;
}

const persons = [
  { firstname: 'Malcom', lastname: 'Reynolds' },
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne', lastname: 'Cobb' },
];

function getFullName(item) {
  return [item.firstname, item.lastname].join(' ');
}
// console.log(myMap(persons, getFullName));

module.exports = { myMap };
