/**
 * Created by Sudheer Chowdary on 9/29/2016.
 */
//--------Prototype-----------------------------------
function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " gave life to " + targetPlayer.name);
    }
}
var sam = new User();
var nag = new User();
sam.name = "Samantha";
nag.name = "Nagachaitanya";
sam.giveLife(nag);
console.log("Sam ", sam.life);
console.log("Nagachaitanya  ", nag.life);

//You can add functions to all objects
User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3 ;
    console.log(this.name + " uppercut to " + targetPlayer.name);
}

nag.uppercut(sam);
console.log("Sam ", sam.life);
console.log("Nagachaitanya  ", nag.life);

//You can add properties to all objects
User.prototype.magic = 50;
console.log("Sam magic ", sam.magic);
console.log("Nagachaitanya  magic ", nag.magic);