let obj1 = {
    name: "John Doe",
    age: 20,
    prompt: function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }
}

let obj2 = {
    name: "Alice",
    age: 18
}

const prompt = obj1.prompt;

prompt.call(obj2);  // obj2 borrows function from obj1