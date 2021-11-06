console.log('------------- #5');

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Вы согласны?",
  () => console.log("Вы согласились."),
  () => console.log("Вы отменили выполнение.")
);
  
console.log('------------- #6');

let string = 'my-short-string';
let arr = string.split('-');
console.log(arr);

console.log('------------- #7');

let array = ['JavaScript', 2015];
let str = array.join(' ');
console.log(str);

console.log('------------- #8');

let users = [
  {id: 1, name: "Vic", age: 21},  
  {id: 2, name: "Petya", age: 30}, 
  {id: 3, name: "Jon", age: 5}
];

let user = users.filter((item) => { return item.age < 20 } );

console.log(user);

console.log('------------- #9');
let users2 = [
  {id: 1, name: "Vic", age: 21},  
  {id: 2, name: "Petya", age: 30}, 
  {id: 3, name: "Jon", age: 5}];

let names = users2.map((item) => item.name);

console.log( names ); 

console.log('------------- #10');

function filterRangeInPlace(arr3, a, b) {
  for (let i = 0; i < arr3.length; i++) {
    let val = arr3[i];

    if (val < a || val > b) {
      arr3.splice(i, 1);
      i--;
    }
  }
}
let arr3 = [5, 3, 8, 1];
filterRangeInPlace(arr3, 1, 4);
console.log( arr3 ); 

console.log('------------- #11');
 
function func(str, sep) {
  return str.split(sep);
}
console.log(func('my-short-string',"-"));


console.log('------------- #12');

function slArray(arr4, startIndex, endIndex) {
  let newArr = [];
  arr4.forEach(function(element) {
    if (element <= endIndex && element >= startIndex) {
      newArr.push(element);
    }
  })
  return newArr;
}
let arr4 = [5, 3, 8, 1];
let range = slArray(arr4, 1, 4);
console.log( range ); // 3, 8, 1 
console.log( arr4 ); // 5,3,8,1 (без изменени

console.log('------------- #13');

function sum(...args) {
  let sumAll = 0;
  for (let arg of args) {
    sumAll += arg;
  }
  return sumAll;
}
console.log(sum(1, -66, 8));

