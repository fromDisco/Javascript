// function dirReduc(plan) {
//     var opposite = {
//         'NORTH': 'SOUTH',
//         'EAST': 'WEST',
//         'SOUTH': 'NORTH',
//         'WEST': 'EAST'
//     };
//     return plan.reduce(function (dirs, dir) {
//         if (dirs[dirs.length - 1] === opposite[dir])
//             dirs.pop();
//         else
//             dirs.push(dir);
//         return dirs;
//     }, []);
// }


function dirReduc(arr) {
    var str = arr.join(''),
        pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
    while (pattern.test(str)) str = str.replace(pattern, '');
    return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"])
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"])