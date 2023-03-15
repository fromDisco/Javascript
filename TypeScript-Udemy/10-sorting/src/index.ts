class Sort {
    constructor(public arr: number[]) {}

    calculate(): void {
        // count down, because after one full iteration
        // the most right number is always the biggest number
        for (let i = this.arr.length; i > 0; i--) {
            for (let j = 0; j <= i; j++) {
                // check if arr[j] is > arr[i + 1]
                if (this.arr[j] > this.arr[j + 1]) {
                    // if so, swap order
                    [this.arr[j], this.arr[j + 1]] = [
                        this.arr[j + 1],
                        this.arr[j],
                    ];
                }
            }
        }
    }
}

const sort = new Sort([3, -1, 10, 25, 5]);
sort.calculate();
console.log(sort.arr);
