var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var a = 0;
while(a <= 8){
  console.log(ingredients[a]);
  a = a + 1;
}

// Write a for loop that prints out the contents of ingredients:
for(var b = 0; b <= 8; b = b + 1){
  console.log(ingredients[b]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
var a = 0;
while(a <= 8){
  console.log(ingredients[8 - a]);
  a = a + 1;
}
