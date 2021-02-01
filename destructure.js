const person = {name: 'Jack Willian', age:17, job:'facebooker', gfName:'Ema Watson', address:'Kocu Khet', phone:'01454356', friends:['Tom Hanks', 'Tom Cruise', 'Tom yarn']}

// const gfName = person.gfName;
// const phone = person.phone;
const {phone, gfName, address, salary} = person; //object destructure

console.log(gfName, phone ,salary, address);
console.log(gfName, phone);
console.log(gfName, phone);
console.log(gfName, phone);

const complexObject = {
    name  : 'abc',             
    info :{
        address: 'kola bagan',    // <== nested object
        leader : 'Tiger Leader'
    }
}

const {leader} = complexObject.info;

console.log(leader);


const friends = ['Sakib Khan', 'Arman Khan', 'Amir Khan','Arman Khan', 'Salman Khan', 'sharukh khan'];

const [chotoFriend, nextFriend,...restFriends] = friends; //array desctructure

console.log(chotoFriend, nextFriend);
console.log(restFriends);