let num = prompt("Enter any number");
console.log(`Multiplication table of: ${num}`);

let primeCount = 0;  


for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(`${num} x ${i} = ${result}`);

    
    let count = 0;

    
    for (let j = 1; j <= result; j++) {
        if (result % j === 0) {
            count++;
        }
    }

   
    if (count === 2) {  
        console.log(`${result} is a prime number`);
        primeCount++; 
    }
}


console.log(`Total prime numbers in the table: ${primeCount}`);
