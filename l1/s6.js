
let arr = [
    {
        name: 'Nik',
        age: 40
    },
    {
        name: 'Bob',
        age: 45
    },
    {
        name: 'Pol',
        age: 20
    }
];


arr.unshift({
    name: 'Yan',
    age: 27
});
console.log(arr.length);

// console.log(arr.shift(), arr.length);

arr.splice(1, 1, {
    name: 'Anna',
    age: 29
}
);


console.log(arr.length, arr);

let arr2 = arr.slice(1);
let arr3 = arr.concat(arr2);


console.log(arr3);

arr3.forEach(item => console.log(item.name));

for (let name of arr3.map(item => `name = ${item.name}`)) {
    console.log(name);
}

console.log(arr.filter(item => item.age < 30));

console.log(arr.find(item => item.name === 'Anna'));

console.log(arr.indexOf(arr.find(item => item.name === 'Anna')));

console.log(arr.includes(arr.find(item => item.name === 'Anna1')), !!arr.find(item => item.name === 'Anna1'));

arr3.sort((a, b) => a.name.localeCompare(b.name))
arr3.reverse();


console.log(arr3.join('  ==  '));

console.log(arr3.reduce((acc, val) => {
    acc.set(val.name, val);
    return acc;
}, new Map()));

