function double(num) {
    return num*2;
}
function add(num1, num2) {
    return num1 + num2;
}


const double2 = num => num * 2;
const add2 = (num1, num2) => num1 + num2;
const multipleTask= (num1, num2) =>{
    num3= num1 * 2;
    num4= num2 * 5;
    num5= num3 + num4;
    return num5;
}

console.log(double(5));
console.log(double2(5));
console.log(add(10, 15));
console.log(add(10, 15));
console.log(multipleTask(10, 15));