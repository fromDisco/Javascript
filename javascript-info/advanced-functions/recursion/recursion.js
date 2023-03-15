function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2, 6)); // 8


// Sum Salary of nested department
let company = { // the same object, compressed for brevity
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
    }],
    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],
        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};


function sumSalary(department) {

    let salary = 0;
    
    if (Array.isArray(department)) {

        // if department is array, it is a list of employees 
        // it is the deepest level of object
        return department.reduce( ((prev, el) => prev + el.salary), 0);

    } else {

        for (let iterator in department) {
            // sum all salaries given back from array.reduce()
            salary += sumSalary(department[iterator]);
        }

    }
    
    return salary;
}

console.log(sumSalary(company));


let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };


let list2 = {
    value: 1,
    list21: {
        value: 2,
    },
}
// console.log(list2.value.next);



function sumSalaryArr(department) {

    let salaryArr = [];
    
    if (Array.isArray(department)) {

        // if department is array, it is a list of employees 
        // it is the deepest level of object
        return department.reduce( ((prev, el) => prev + el.salary), 0);

    } else {
        for (let iterator in department) {
            
            let salary = sumSalaryArr(department[iterator]);
            // concat all salaries given back from array.reduce()
            // push() creates subarrays
            salaryArr = salaryArr.concat(salary);
        
        }
    }
    
    return salaryArr;
    
}

console.log(sumSalaryArr(company));
