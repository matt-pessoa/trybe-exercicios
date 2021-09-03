const greetPeople = (people) => {
  let greeting = '';
  let newArray = [];

  for (const person in people) {
    greeting = `Hello ${people[person]}`;
    newArray.push(greeting);
  }
  return newArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
console.log(greetPeople(parameter));