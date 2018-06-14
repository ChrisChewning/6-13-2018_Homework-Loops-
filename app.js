
//Write a for loop that will log the numbers 1 through 20.

for (i = 0; i < 21; i++ ) {
  console.log(i)
};



//Write a for loop that will log only the even numbers in 0 through 200.

for (i = 0; i <= 200; i+=2) {
  console.log(i)
};


//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.


for (i = 0; i <20 ; i++) {
console.log("Love me, pet me! HSSSSS!");
};

// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
//
// Hint: You will need to use Math.random()

for (i = 0; i <20 ; i+=2) {
  console.log(Math.random("Love me, pet me! HSSSSS!"));
};



//FIZZ BUZZ
// - Write a javascript application that logs all numbers from 1 - 100.
// - If a number is divisible by 3 log "Fizz" instead of the number.
// - If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.



//Don't think this works.
for (i = 1; i <=100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz")
  }
  else if (i % 5 === 0) {
    console.log("Buzz")
  }
  else if (i % 3 && 5) {
  console.log("FizzBuzz")
  }
};


//COMMIT 5: Getting to Know You Answered

// //GETTING TO KNOW YOU (REMOVING AND CHANGING)
const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

//Matt H. decides that Thom. cant be named "Thom" anymore. Remove "Thom" from the thom array and replace it with "Gameboy".

thom[0] = "Gameboy";
console.log(thom);

// Karolin just had her birthday; change Karolins array to reflect her being a year older.

karolin[1] = 17;
console.log(karolin);


//Change Matt Hs hometown from Philadelphia to "Gotham City".

matt[2] = "Gotham City";
console.log(matt);

//Remove "Pittsburgh" from Kristyns array and add "Brooklyn".
kristyn.splice(2,1, "Brooklyn"); //start at the 2nd index, cut off 1 index, add this item.
console.log(kristyn);
