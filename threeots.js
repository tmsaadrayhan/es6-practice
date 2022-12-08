const ages= [10, 11, 12];
const ages2= [13, 14, 15];
const ages3= [16, 17, 18];

const allAges= ages.concat(ages2).concat(5).concat(ages3);
const allAges2= [...ages, ...ages2, 5, ...ages3]
console.log(allAges);
console.log(allAges2);

const num1= 5;
const num2= 8;
const num3= 7;
const numArray= [5, 8, 7];
console.log(Math.max(num1, num2, num3));
console.log(Math.max(...numArray));