var myHashA = {
  a : "A_item",
  b : "B_item"
};

var myHashB = {
  "a" : "A_item",
  "b" : "B_item"
};

var test = myHashA;

console.log(test.a);
console.log(test["a"]);
console.log(test.b);
console.log(test["b"]);


test = myHashB;

console.log(test.a);
console.log(test["a"]);
console.log(test.b);
console.log(test["b"]);
