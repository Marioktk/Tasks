let num = prompt("Enter any number");
console.log(`Multiplication table of: ${num}`);

let primeCount = 0;  // To count total prime numbers


for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(`${num} x ${i} = ${result}`);

    // Check if the result is a prime number
    let count = 0;

    
    for (let j = 1; j <= result; j++) {
        if (result % j === 0) {
            count++;
        }
    }

    // If count is more than 2, it's not a prime number
    if (count === 2) {  
        console.log(`${result} is a prime number`);
        primeCount++; 
    }
}

// Show total prime numbers
console.log(`Total prime numbers in the table: ${primeCount}`);
