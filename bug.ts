function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

let result1 = add(5, 3); //result1 is inferred to be a number
console.log(result1); // Outputs 8

let result2 = subtract(5,3); //result2 is inferred to be a number
console.log(result2); //Outputs 2

//This will throw an error because it tries to assign a string to a number
let result3 = add(5, "3");
console.log(result3);