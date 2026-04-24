export const MapReduceFilter = () => {
  const mockData = [
    { name: "shivam", surName: "gupta", age: 29 },
    { name: "nipun", surName: "gupta", age: 26 },
    { name: "khushi", surName: "gupta", age: 25 },
    { name: "harshit", surName: "mittal", age: 30 },
    { name: "har", surName: "mit", age: 30 },
  ];

  // get me full name of someone who's over 27  --> Reduce method by Akshay Saini

  mockData
    .reduce((acc, cur) => {
      if (cur.age > 27) {
        acc.push(cur.name + " " + cur.surName);
      }
      return acc;
    }, [])
    .map((item) => console.log(item));

  // get names of people who have same age
  // write code here
  const sameAge = mockData.reduce((acc, curr) => {
    if (acc[curr.age]) {
      ++acc[curr.age];
      console.log(curr.name + " " + curr.surName);
    } else {
      acc[curr.age] = 1;
    }
    return acc;
  }, {});

  console.log("sameAge Object", sameAge);
  const sameAgePerson = mockData
    .filter((person) => {
      if (sameAge[person.age] > 1) return person;
    })
    .map((p) => p.name + " " + p.surName);

  console.log("same age person", sameAgePerson);

  // Array Protoype attaching myAge function to Arrays
  Array.prototype.myAge = function () {
    for (let i = 0; i < this.length; i++) {
      console.log(this[i].age);
    }
  };
  mockData.myAge();
};
