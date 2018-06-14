
//1. Write a for loop that will log the numbers 1 through 20.

for (i = 0; i < 21; i++ ) {
  console.log(i)
};



//2. Write a for loop that will log only the even numbers in 0 through 200.

for (i = 0; i <= 200; i+=2) {
  console.log(i)
};


//3. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.


for (i = 0; i <20 ; i++) {
console.log("Love me, pet me! HSSSSS!");
};


//------------------ASK ABOUT #3 ------------------------------------

//4. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
//
// Hint: You will need to use Math.random()

for (let i = 0; i <20 ; i+=2) {
  console.log(Math.random("Love me, pet me! HSSSSS!"));
};


for (let i = 0; i <=20; i++) {
  if (i% 2 === 0) {
    console.log("Love me, pet me! HSSSSS!");
  }
}

//random decimals and you are trying to get the string to log instead of decimals.




//Chain methods? So they're integers and not 0 - 1, which is what the random method does.



//5. FIZZ BUZZ
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
  else if ((i % 3 === 0) && (i % 5 === 0)) {
  console.log("FizzBuzz")
} else {
  console.log(i);
}
};


//COMMIT 5: Getting to Know You Answered. WORKS!

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



//COMMIT 6: WORKS! Review what didn't work at first.

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let i = 0; i < ninjaTurtles.length; i++) {
console.log(ninjaTurtles[i].toUpperCase());
};


//let newNinjas[i] = ninjaTurtles[i].toUpperCase(); //DIDN'T WORK

//COMMIT 7:

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// Alien Attire
// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

//step 1: remove krystn's left shoe. save it const kristynsShoe. WORKS
const kristynsShoe = kristynsCloset[0];
//OR const kristynsShoe = kristynsCloset.shift();
console.log(kristynsLeftShoe);


console.log(kristynsLeftShoe.shift());

//step 2: use kristynsShoe to add it to Thom's accessories array.
//need to add where you don't delete what's already there in that index space.
console.log(thomsCloset[2][1] = kristynsLeftShoe);


// Dress Us Up
// Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

//step 1: const 3 separate outfits.
//step 2: 'Kristyn will be wearing ' + const ____ + ' on Tuesday ' + const + ' on Wednesday ' + const + and ' const ' + on Thursday'




//COMMIT 8:


// Continue looking at the closet arrays:
//
// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

//MY GUESS SO FAR:
for (let i = 0; let <= kristynsCloset.length; i++) {
console.log("WHIRR: Now washing " + [i]);
}


//Step 2: console.log all of the arrays.
// Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.
//

for (let i = 0; let < thomsCloset.length; i++) {
  console.log(thomsCloset[i]);
}


//MY GUESS SO FAR: for loop to loop through each array. Console.log after each array.length is done?



//COMMIT 9:

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.
