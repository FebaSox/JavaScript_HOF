console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
    return function (plusNumber) {
        return plusNumber + number;
    }
}

const plus15 = plus(15);
console.log(plus15);
console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
        name: "Frodo",
        age: 50,
        score: 85,
        isActive: false,
    },
    {
        name: "Sam",
        age: 38,
        score: 94,
        isActive: true,
    },
    {
        name: "Merry",
        age: 36,
        score: 82,
        isActive: true,
    },
    {
        name: "Pippin",
        age: 26,
        score: 77,
        isActive: false,
    },
];


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const mappedUSers = users.map((element) => {
    //We tell the app how to tranfer each item, by giving this 
    return {
        name: element.name,
        score: element.score
    };
});


//Exc 4 - Filter
console.log("EXERCISE 4:\n==========\n");

const filteredUsers = users.filter((element) => {
    //We test each element to determain if we should keep it or not
    //Should I stay or Should I go
    if (element.isActive == true) {
        // if (element.isActive)
        //keep the element
        return true;
    } else {
        //discard element
        return false;
    }
});

console.log(filteredUsers);

/* const fileredUsers = users.filter((element) => {
    return element.isActive;
});
console.log(filteredUsers); */

//Exc 5 - Sort
console.log("EXERCISE 5:\n==========\n");

users.sort((a, b) => {
    if (a.score > b.score) {
        return 1;
    } else if (a.score < b.score) {
        return -1;
    }
    return 0;
});

console.log(users);

/* users.sort((a, b) => {
    return b.score - a.score;
}); 

console.log(users); */


//Exc 6 - Reduce
console.log("EXERCISE 6:\n==========\n");

users.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.score;
}, 0);

console.log(reducedUsers);
