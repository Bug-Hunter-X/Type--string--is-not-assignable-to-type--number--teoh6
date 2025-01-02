# Type 'string' is not assignable to type 'number' in TypeScript

This repository demonstrates a common TypeScript error: attempting to perform an arithmetic operation on a number and a string.  The TypeScript compiler correctly flags this as a type error because it prevents potential runtime exceptions. 

The `bug.ts` file shows the code that produces the error. The `bugSolution.ts` file provides a corrected version.  This example highlights the importance of type safety in TypeScript for creating robust and reliable applications.

## How to Run

1. Clone this repository.
2. Ensure you have Node.js and npm (or yarn) installed.
3. Navigate to the repository directory.
4. Compile and run the TypeScript code using the following command:
   ```bash
npx tsc bug.ts && node bug.js
npx tsc bugSolution.ts && node bugSolution.js
```