const scores = [
  {
    marks: 32,
    name: "Yvette Merritt"
  },
  {
    marks: 57,
    name: "Lillian Ellis"
  },
  {
    marks: 22,
    name: "Mccall Carter"
  },
  {
    marks: 21,
    name: "Pate Collier"
  },
  {
    marks: 91,
    name: "Debra Beard"
  },
  {
    marks: 75,
    name: "Nettie Hancock"
  },
  {
    marks: 20,
    name: "Hatfield Hodge"
  }
];
// [32, 57, 22]
// Task 1
// Print the name list - As an array
// Expected Output
// ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
//  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]

var names = [];
scores.forEach(score => {
  names.push(score.name);
});
console.log(names);

// Task 2
// >=40 pass.. find those student that passed (Use array method)
// Expected Output
// [{
//     marks: 57,
//     name: "Lillian Ellis"
//   },
//     {
//     marks: 91,
//     name: "Debra Beard"
//   },
//   {
//     marks: 75,
//     name: "Nettie Hancock"
//   }]

console.log(scores.filter(score => score.marks >= 40));

// Task 3
//  Find all the names who failed the exams (Array methods)
// Expected Output
//   ["Yvette Merritt",
//   "Mccall Carter",
//   "Pate Collier",
//   "Hatfield Hodge"
// ];

console.log(scores.filter(score => score.marks < 40));


// Task 4
// Find the Average marks

console.log(scores.reduce((a, c) => {
  
  return {
    name: "accumulator",
    marks: a.marks+c.marks,
  }
}).marks/scores.length);

// Task 5
// Find the topper's name
// Expected Output
// "Debra Beard"

console.log(scores.reduce((a, c) => {
  return a.marks > c.marks ? a : c;
}).name);

// Only use
// map, reduce, filter & destructuring

// Task 6 - use es6
// Build -  intersection, uniq, without, groupBy
// https://lodash.com/docs/4.17.15#groupBy


// Intersection method
let intersection = (...arrays) => arrays.reduce((a, c) => a.filter(item => c.indexOf(item) != -1))

console.log(intersection([2, 1], [2, 3], [2, 1], [2, 2]));

// Uniq method
let uniq = (array) => Array.from(new Set(array));

console.log(uniq([1, 1, 2, 2, 3, 3, 4]));

// Without method
let without = (...params) => {
  var arguments = params;
  var array = arguments.shift();
  var withoutValues = arguments;

  withoutValues.forEach(item => {
      while (array.indexOf(item) != -1) {
        array.splice(array.indexOf(item), 1);
      }
  })
  return array;
}

console.log(without([2, 1, 2, 3], 1, 2));

// groupby
let groupBy = (...params) => {
  var result = {};
  var [array, callBack] = params;
  array.forEach(item => {
    if (result[callBack(item)]) {
      result[callBack(item)].push(item);
    }
    else {
      result[callBack(item)] = [item];
    }
  });
  return result;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));