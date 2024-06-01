let heading = document.querySelector("h2");
let email = document.querySelector("#input");
console.log(heading.innerHTML);
// console.log(email.innerHTML);

function inputTaken(e) {
  console.log(e.target.value);
  return e.target.value;
}
// let input = inputTaken(e);
// console.log("input");

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(4, 5));

email.addEventListener("input", inputTaken);
console.log(input);
const me = {
  name: "Zahoor",
  age: 22,
  email: "zahoor@gmail.com",
  address: {
    city: "Faisalabad",
    country: "Pakistan",
  },
  education: {
    middle: {
      city: "Faisalabad",
      school: "Govt. High School Amir Road Shadbagh",
    },
    matric: "Faisalabad",
    high: "Faisalabad",
    grad: {
      city: "Faisalabad",
      school: "University of Agriculture, Faisalabad",
    },
  },
};

console.log(me.address.city);
