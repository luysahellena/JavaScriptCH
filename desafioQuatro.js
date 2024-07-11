
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2015,
    color: "Silver"
  };
  
  
  console.log("Car Properties:");
  console.log(`Brand: ${car.brand}`);
  console.log(`Model: ${car.model}`);
  console.log(`Year: ${car.year}`);
  console.log(`Color: ${car.color}`);
  
  
  console.log(alert("\nChoose an option: 1. Change the car's color 2. Update the car's year 3. Display the car's information 4. Exit"));
  
  
  let userInput = prompt("Enter your choice (1-4): ");
  
  
  switch (userInput) {
    case "1":
      let newColor = prompt("Enter the new color: ");
      car.color = newColor;
      console.log(`Car's color has been changed to ${car.color}`);
      break;
    case "2":
      let newYear = parseInt(prompt("Enter the new year: "));
      car.year = newYear;
      console.log(`Car's year has been updated to ${car.year}`);
      break;
    case "3":
      console.log("Car Information:");
      console.log(`Brand: ${car.brand}`);
      console.log(`Model: ${car.model}`);
      console.log(`Year: ${car.year}`);
      console.log(`Color: ${car.color}`);
      break;
    case "4":
      console.log("Goodbye!");
      break;
    default:
      console.log("Invalid choice. Please try again.");
  }