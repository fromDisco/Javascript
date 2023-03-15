// describe("pow", function () {

//     it("raise 2 to power 3 is 8", function () {
//         assert.equal(pow(2, 3), 8);
//     });

//     it("raise 3 to power 4 is 81", function () {
//         assert.equal(pow(2, 3), 8);
//     });

// });

describe("pow", function () {

    describe("raises x to power 3", function () {
        
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }
    
        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    describe("for negative n the result is NaN", function () {
        it("for -1 it is NaN", function () {
            assert.isNaN(pow(2, -1));
        });
        
        it("for non-integer n the result is NaN", function () {
            assert.isNaN(pow(2, 1.5));
        });
    });

});