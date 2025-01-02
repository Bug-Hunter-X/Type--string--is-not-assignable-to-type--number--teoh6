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

//Corrected: Type safety enforced.  Now it is explicit and won't throw an error
let result3 = add(5, Number("3"));
console.log(result3); //Outputs 8

//Alternative solution using type assertion (use cautiously)
let result4 = add(5, <number>"3");
console.log(result4); //Outputs 8