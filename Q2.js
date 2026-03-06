function greetUser(name, greeting = "Hello") {
  return greeting + " " + name;
}

console.log(greetUser("Sandeep")); 
console.log(greetUser("Sandeep", "Good morning"));
