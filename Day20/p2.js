// Implement a JavaScript class hierarchy that represents the different types of cars, and allows for the management of car objects with the following requirements:

// All car objects should have a make, model, and year property that is set during object creation and cannot be changed afterwards.

// The system should support adding and removing cars from the system.

// The system should allow for updating the specific information of a car, such as the number of doors for a sedan, the cargo capacity for a truck, or the passenger capacity for an SUV.

// The system should be able to retrieve and display the details of all cars in the system, as well as the details of individual cars by their make and model.

// The system should have proper error handling, such as checking for valid input and handling edge cases.
// Base Car class
class Car {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }

  getMake() {
    return this.make
  }

  getModel() {
    return this.model
  }

  getYear() {
    return this.year
  }

  // Common methods for all cars
  getInfo() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`
  }

  updateInfo(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }
}

// Sedan class
class Sedan extends Car {
  constructor(make, model, year, numDoors) {
    super(make, model, year)
    this.numDoors = numDoors
  }

  getNumDoors() {
    return this.numDoors
  }

  // Additional methods for Sedan cars
  getInfo() {
    return `${super.getInfo()}, Number of Doors: ${this.numDoors}`
  }

  updateInfo(make, model, year, numDoors) {
    super.updateInfo(make, model, year)
    this.numDoors = numDoors
  }
}

// SUV class
class SUV extends Car {
  constructor(make, model, year, passengerCapacity) {
    super(make, model, year)
    this.passengerCapacity = passengerCapacity
  }

  getPassengerCapacity() {
    return this.passengerCapacity
  }

  // Additional methods for SUV cars
  getInfo() {
    return `${super.getInfo()}, Passenger Capacity: ${this.passengerCapacity}`
  }

  updateInfo(make, model, year, passengerCapacity) {
    super.updateInfo(make, model, year)
    this.passengerCapacity = passengerCapacity
  }
}

// Truck class
class Truck extends Car {
  constructor(make, model, year, cargoCapacity) {
    super(make, model, year)
    this.cargoCapacity = cargoCapacity
  }

  getCargoCapacity() {
    return this.cargoCapacity
  }

  // Additional methods for Truck cars
  getInfo() {
    return `${super.getInfo()}, Cargo Capacity: ${this.cargoCapacity}`
  }

  updateInfo(make, model, year, cargoCapacity) {
    super.updateInfo(make, model, year)
    this.cargoCapacity = cargoCapacity
  }
}

// CarManagementSystem class to manage cars
class CarManagementSystem {
  constructor() {
    this.cars = []
  }

  addCar(car) {
    this.cars.push(car)
  }

  removeCar(car) {
    const index = this.cars.indexOf(car)
    if (index !== -1) {
      this.cars.splice(index, 1)
    }
  }

  updateCarInfo(car, make, model, year, additionalInfo) {
    car.updateInfo(make, model, year, additionalInfo)
  }

  getCarInfo(car) {
    return car.getInfo()
  }

  getAllCarsInfo() {
    return this.cars.map((car) => car.getInfo())
  }

  getCarByMakeAndModel(make, model) {
    return this.cars.find(
      (car) => car.getMake() === make && car.getModel() === model,
    )
  }
}

// Example usage:

// Create instances of cars
const sedan1 = new Sedan('Toyota', 'Camry', '2022', 4)
const suv1 = new SUV('Honda', 'Pilot', '2021', 7)
const truck1 = new Truck('Ford', 'F-150', '2021', 2)
