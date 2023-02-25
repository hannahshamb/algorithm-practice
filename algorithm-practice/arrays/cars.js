/*
Technical:

You have an array of cars called lotCars that includes the value of model, year and color for each car.
The current cars in the lot are:

Model: Corolla, 2018, redModel: Maxima, 2015, grayModel: Mustang, 1995, blackModel: Prius, 2020, grayModel: Camry, 2019, redModel: Sentra , 2002, red

Say you have a customer looking for a car, they want a red car newer than 2017 but are willing to be flexible with either condition but not both.

Print a list of the cars in the array
print out cars newer than 2017 with New after the car information (N)Print out cars that are red with (R after the car information)Any car that is both Red and New print out with "Preferred"(Bonus: Now modify it so that it also includes a range of years 2015-2021 and list in order.)Bonus: Can you do it again, in another way?
*/

const lotCars = [
  {
    model: 'Corolla',
    year: 2018,
    color: 'red'
  },
  {
    model: 'Maxima',
    year: 2015,
    color: 'gray'
  },
  {
    model: 'Mustang',
    year: 1995,
    color: 'black'
  },
  {
    model: 'Prius',
    year: 2020,
    color: 'gray'
  },
  {
    model: 'Camry',
    year: 2019,
    color: 'red'
  },
  {
    model: 'Sentra',
    year: 2002,
    color: 'red'
  }
];

// print out a list of cars in the array
// a. print out cars newer than 2017 with New after the car information
const newCars = [];
 lotCars.forEach(car => {
  if (car.year > 2017) {
    car.details = 'New'
    newCars.push(car);
  }
})
console.log('newCars', newCars);

// b. Print out cars that are red with R after the car information
const redCars = [];
lotCars.forEach(car => {
  if (car.color === 'red') {
    car.details = 'R'
    redCars.push(car);
  }
})
console.log('redCars', redCars);

// c. Print out cars that are both red and new with "Preferred"
const redAndNewCars = [];
lotCars.forEach(car => {
  if (car.color === 'red' && car.color === 'red') {
    car.details = 'Preferred'
    redAndNewCars.push(car);
  }
})
console.log('redAndNewCars', redAndNewCars);

// d. Bonus: Now modify it so that it also includes a range of years 2015-2021 and list in order.
const rangedCars = [];
lotCars.forEach(car => {
  if (car.year >= 2015) {
    rangedCars.push(car);
  }
})
function sortByYear(a, b) {
  if (a.year < b.year) {
    return -1
  }
  if (a.year > b.year) {
    return 1
  }
}
const orderedCars = rangedCars.sort(sortByYear)

console.log('orderedCars', orderedCars);



/*
For Loop (3 conditions)

FizzBuzz type programming question.

FizzBuzz is where you print out number 1 - 100, any number div by 3, print Fizz, by 5 print out 5 Buzz, divisible by both 3 & 5 FizzBuzz.
*/

// 1. for loop, initialize i at 0, loop while i is less than or equal to 100, increment i
// 2. console.log i within the for loop (will console log numbers 1 - 100) if none of other conditions are met
// 3. if statement to check if i mod 3 is strictly equal to 0
// 4. console.log the number and Fizz
// 5. if statement to check if i mod 5 is strictly equal to 0
// 6. console.log the number and Buzz
// 7. check if i mod 3 is strictly equal to 0 AND i mod 5 is strictly equal to zero BEFORE the other if statements
// 8. console.log the number and FizzBuzz
for (i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, 'FizzBuzz')
  } else if (i % 3 === 0) {
  console.log(i, 'Fizz');
  }
  else if (i % 5 === 0) {
    console.log(i, 'Buzz')
  } else {
    console.log(i);
  }

}
