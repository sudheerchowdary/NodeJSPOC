/**
 * Created by Sudheer Chowdary on 9/29/2016.
 */
//------------Reference to objects-------------------
var sudheer = {
    food: "Biriyani",
    movie: "God Father"
};

var babu = sudheer;
babu.food = "Salad";

console.log(sudheer.food);

// == and === difference
console.log(19 == "19"); //true - it checks the values
console.log(19 === "19"); //false - it checks the value and type