class Group {
    constructor() {
        this.group = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.group.push(value);
        }
    }

    delete(value) {
        if (this.has(value)) {
            this.group = this.group.filter(item => item != value);
        }
    }

    has(value) {
        return this.group.includes(value);
    }

    static from(items) {
        let g = new Group();
        for (let item of items) {
            g.add(item);
        }

        return g;
    }
}

const group = Group.from([1, 2]);
console.log(group.has(1));
console.log(group.has(3));