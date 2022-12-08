const person= {name: "John William", age: 17, job: "facebooker", gfName: "Emma Watson", address: "kochu khet", phoneNumber: "01717112211", friends: ["Tom Hanks", "Tom Cruise", "Tom Yarn"]};
const gfName= person.gfName;
const { phoneNumber, address }= person;

console.log(gfName, phoneNumber, address);
const friends= ["al pacino", "robert de niro", "joe pesci", "james stewart", "clint eastwood"];
const [smallFriend, nextFriend, ...restFriend]= friends;
console.log(smallFriend, nextFriend, restFriend);
console.log(restFriend);

const complexObject= {
    name: "abc",
    info: {
        address: "kola bagan",
        leader: "alpha"

    }
}

const {leader}= complexObject.info;
console.log(leader);