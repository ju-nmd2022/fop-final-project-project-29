function getRandomName(obj) {
  let keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
}
let myObj = {
  name: "John",
  age: 30,
  occupation: "Software Developer",
};

let randomName = getRandomName(myObj);
console.log(randomName);

