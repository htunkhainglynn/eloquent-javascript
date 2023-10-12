class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

Rabbit.prototype.teeth = "small"  // create a property (find in prototype if the property is not found in the class)

let blackRabbit = new Rabbit('black');
let whiteRabbit = new Rabbit('white')
whiteRabbit.teeth = "big";  // override a property

console.log(blackRabbit.teeth);
console.log(whiteRabbit.teeth);
