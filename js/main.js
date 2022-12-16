console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
const myImmutableArray = ["Jared", "Francis", "Amrit", "Sarah", "Gurleen", "Johanna", "Ury"];


// Step 2: Add the 3 people's names to the array
myImmutableArray.push("Naveen","Sumit","Paramjeet");

// Step 4: Remove the first array item from the array
myImmutableArray.shift();

// Step 5 Remove the second array item from the array
myImmutableArray.splice(1,1);

// Step 6: Using array filter, iterate over the array items and remove all items beginning with the letter "J". Store the result in a new, block scoped, mutable variable
let result=myImmutableArray.filter(function (item){
    return item[0]!="J"
});
// Step 7: Create an event listener that fires a callback function when the call to action button in the header is clicked. It should alert "Call me now at 555-555-55555"