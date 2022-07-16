var a = ['dog','cat','hen'];
a[100] = 'fox';
console.log(a.length);

let rainForests = ["Amazon","Borneo","Cerrado","Congo"];
rainForests.splice(0,2);
console.log(rainForests);

var sound = "grunt";
var bear = {sound:"roar"};
function roar(){
    console.log(this.sound);
}

// let animals = ["eagle","osprey","salmon"];
// let key = animal => animal == "salmon";
// if(){
//     console.log("swim");
// }

class RainForest{
    static minimumRainFall = 60;
}
let congo = new RainForest();
RainForest.minimumRainFall = 80;
console.log(congo.minimumRainFall);

let bear = {
    sound:"roar",
    roar(){
        console.log(this.sound);
    }
}
bear.sound = "grunt";
let bearSound = bear.roar;
bearSound();


const x = [1,2];
const y = [5,7];
const z = [...x,...y];
console.log(z);

const person = {name:"Dave",age:40,hairColor:"blue"};
const result = Object.keys(person).map(x => x.toUpperCase());

const myNumbers = [1,2,3,4,5,6,7];
const myFunction = arr => {
    return arr.map(x => x+3).filter(x => x<7);
}
console.log(myFunction(my))
