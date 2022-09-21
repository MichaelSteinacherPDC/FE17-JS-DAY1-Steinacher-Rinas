let people = ["Greg", "Mary", "Devon","James"];
people.shift();
people.unshift("Matt");
people.pop();
people.push("Michael");

let people_copy = people.slice(2,4);

console.log(people);
console.log(people_copy);

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));

people = ["Greg", "Mary", "Devon","James"];
