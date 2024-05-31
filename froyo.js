const userInputString = prompt(
  "Please enter some froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const flavorArray = userInputString.split(",");
console.log(flavorArray);

let obj = {};

const flavorCount = (obj) => {
  //const returns a value but not what kind of value is being returned
  for (let i = 0; i < flavorArray.length; i++) {
    // incrementing through elements in array
    const str = flavorArray[i]; // just a shortcut to make code easier to read
    if (!(str in obj)) {
      // we use if statement to ask the condition does the flavor exist yet?
      obj[str] = 1; // add flavor to object if it does not exist
    } else {
      obj[str] += 1; // if it exists, add one to count of flavors
    }
  }
  return obj;
};

obj = flavorCount(obj);
console.log(obj);
