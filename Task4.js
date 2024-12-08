// let cars = [];
// function addCar(car){
// const name = prompt(`Enter the name of the car`);
// const model =prompt(`Enter the model of the car`);
// const year = prompt(`Enter the year of the car`);
// const color = prompt(`Enter the color of the car`);
// const price = prompt(`Enter the price of the car`);

// const car = {
//     name: name,
//    model: model,
//     year: year,
//     color: color,
//     price: price
//     }
//     car.push(cars)
//     alert(`${car} added successfully`);
// }
// function removeCar(car){
// const name =prompt(`Enter the name of he car`);
// const carIndex = cars.findIndex(car => name === car.name);
// if(index !== 0){
//     cars.splice(carIndex, 1)
//     alert(`${name} deleted successfully`)
// }
// else{
//     alert(`Car is not in the list`);
// }
// }

// function searchCar(car){
// const name = prompt (`Enter the name of the car`);
// const cars = cars.find(car => name === car.name);
// if(car){
//     alert(`Car specification \n : ${car.name}  \n Model: ${car.model} \n Year: ${car.year} \n Color: ${car.color} \n Price: ${car.price}`)
// }
// else{
//     alert(`${name} not found`);
// }
// }

// function display(car){
// if(cars.length === 0){
//     alert|(`Current list isn empty`)
// }    
// else{
//     let carList = "Cars in Showroom:\n";
//     cars.forEach(car => {
//  carList += `${car[0]} \n`;   
//  });
//  alert(carList);
// }
// }



// while(true){
//     const choice = prompt(`Select a choice \n 1. Add a car \n 2. Remove a car \n 3. Search a car \n 4. Display all cars \n 0. Quit`)
//     if (choice == `1`){
//         addCar(cars);
//     }
//     else if (choice == `2`){
//         removeCar(cars);
//     }
//     else if(choice == `3`){
//         searchCar(cars)
//     }
//     else if(choice == `4`){
//         display(cars);
//     }
//     else if(choice === 0){
//         alert(`Goodbye`)
//         break;
//     }
//     else{
//         alert(`Invalid choice`)
//         break;
//     }
// }




let cars = [];

function addCar() {
    const name = prompt("Enter the name of the car");
    const model = prompt("Enter the model of the car");
    const year = prompt("Enter the year of the car");
    const color = prompt("Enter the color of the car");
    const price = prompt("Enter the price of the car");

    const car = {
        name: name,
        model: model,
        year: year,
        color: color,
        price: price
    };

    cars.push(car);
    alert(`${name} added successfully!`);
}

function removeCar() {
    const name = prompt("Enter the name of the car to remove");
    const carIndex = cars.findIndex(car => name === car.name);

    if (carIndex !== -1) {
        cars.splice(carIndex, 1);
        alert(`${name} deleted successfully!`);
    } else {
        alert("Car not found in the list.");
    }
}

function searchCar() {
    const name = prompt("Enter the name of the car to search");
    const car = cars.find(car => name === car.name);

    if (car) {
        alert(`Car Specifications:\nName: ${car.name}\nModel: ${car.model}\nYear: ${car.year}\nColor: ${car.color}\nPrice: ${car.price}`);
    } else {
        alert(`${name} not found.`);
    }
}

function displayCars() {
    if (cars.length === 0) {
        alert("Current list is empty.");
    } else {
        let carList = "Cars in Showroom:\n";
        cars.forEach((car, index) => {
            carList += `${index + 1}. Name: ${car.name} \n, Model: ${car.model} \n, Year: ${car.year} \n, Color:${car.color} \n, Price: ${car.price}\n`;
        });
        alert(carList);
    }
}

// Main Menu
while (true) {
    const choice = prompt("Select an option:\n1. Add a car\n2. Remove a car\n3. Search a car\n4. Display all cars\n0. Quit");

    if (choice === "1") {
        addCar();
    } else if (choice === "2") {
        removeCar();
    } else if (choice === "3") {
        searchCar();
    } else if (choice === "4") {
        displayCars();
    } else if (choice === "0") {
        alert("Goodbye!");
        break;
    } else {
        alert("Invalid choice. Please try again.");
    }
}
