class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    minus(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }
}

// Define a getter property 'length' on the prototype of the Vector class.
Object.defineProperty(Vector.prototype, 'length', {
    get: function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
});


let vector = new Vector(3, 4);
console.log('Vector Length:', vector.length); 
console.log('Is "length" in Vector prototype?', Vector.prototype.hasOwnProperty('length'));