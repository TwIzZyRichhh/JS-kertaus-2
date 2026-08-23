'use strict';
let numbers = [];
let input;

do {
  input = prompt("Enter a number (or 'done' to finish):");
  if (input !== "done") {
    numbers.push(parseFloat(input));
  }
} while (input !== "done");

let evenNumbers = [];
for (let num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

let output = document.createElement("div");

output.innerHTML = `
  <h2>Even Numbers Result</h2>
  <p>Even Numbers: ${evenNumbers.length > 0 ? evenNumbers.join(", ") : "None"}</p>
  <p>End of program.</p>
`;

document.body.appendChild(output);
