const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3) // using concat for marge multiple array
const allAges2 = [...ages, ...ages2, 5, ...ages3]; // es6 marge multiple array 
console.log(allAges);
console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
const takaPoisa = [650,450,250];
const maximum1 = Math.max(...takaPoisa); //three dot for spread array

console.log(maximum);
console.log(maximum1);