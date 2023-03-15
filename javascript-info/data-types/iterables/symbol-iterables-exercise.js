// toDo
function CountingEverythingUpDown(start, end, ...args) {
    this.start = start;
    this.end = end;

    [Symbol.iterator]() {
        this.current = this.start;

        // returns the whole object
        return this;
    }

    this.next = () => {
        if (this.current <= this.end) {
            return { done: false, value: this.current++};
        } else {
            return { done: true };
        }
    }
} 

let countNumbers = new CountingEverythingUpDown(5, 13);

for (const iterator of CountingEverythingUpDown) {
    console.log(iterator);
}