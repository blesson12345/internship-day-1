function square(num) {
    return num * num;
}

// Taking input from user
let input = prompt("Enter a number:");
let num = parseFloat(input);

// Checking if input is valid
if (!isNaN(num)) {
    // Calculating square
    let result = square(num);

    // Displaying the result
    console.log(`The square of ${num} is ${result}`);
} else {
    console.log("Invalid input. Please enter a valid number.");
}