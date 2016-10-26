/**
 * Created by Sudheer Chowdary on 9/29/2016.
 */
//-----------Use of this keyword----------------------
var Sudheer = {
    printFirstName: function () {
        console.log("My name is Sudheer");
        console.log(this === Sudheer);
    }
}
Sudheer.printFirstName();

function doSomething() {
    console.log("\nI am doing something");
    console.log(this === global);
}
doSomething();