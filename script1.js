let bob = {
    name: 'Bob',
    age: 22
}

let joe = {
    name: 'Joe',
    lastname: 'Doe',
    age: 21,
    location: 'NY'
}

Object.prototype.numberOfProps = function () {
    return Object.keys(this).length;
}

console.log(bob.numberOfProps());
console.log(joe.numberOfProps());


let obj1 = {
    item1: 23,
    item2: 'none',
    item3: '11',
    item4: NaN,
    item5: 0
}

let obj2 = {
    itemNumber1: 3,
    item2: -1
}

Object.prototype.sumOfNumberProps = function () {
    let sum = 0;

    for (let key in this) {
        if (Number.isNaN(+this[key]) == false)
            sum += +this[key];
    }
    return sum;
}

console.log(obj1.sumOfNumberProps());
console.log(obj2.sumOfNumberProps());

Object.prototype.objectMap = function (callback) {
    const obj = {};

    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            obj[key] = callback(this[key], this);
        }
    }
    return obj;
}


console.log(obj1.objectMap(item => {
    return item + 1
}))

console.log(obj2.objectMap(item => {
    return item + 1
}))

let num = 4;

Number.prototype.increment = function (x) {
    if (x == undefined) {
        return this + 1;
    } else {
        return this + x;
    }
}

console.log(num = num.increment(5));
console.log(num = num.increment());
console.log(num = num.increment(10));


let num01 = 30;

Number.prototype.decrement = function (y) {
    if (y == undefined) {
        return this - 1;
    } else {
        return this - y;
    }
}

console.log(num01 = num01.decrement(5));
console.log(num01 = num01.decrement(3));
console.log(num01 = num01.decrement());


let num1 = 123;
let num2 = 479;

Number.prototype.sumOfDigits = function () {
    let myArr = this.toString().split([])
    return myArr.reduce(function (a, b) {
        return Number(a) + Number(b);
    })
}

console.log(num1.sumOfDigits());
console.log(num2.sumOfDigits());

let arr1 = [3, 5, 6, 8, 2];
let arr2 = [6, 8, 11, 4, 13];

Array.prototype.sumOfFirstLast = function () {
    let someArr = this;
        return someArr[0] + someArr[someArr.length - 1];
}

console.log(arr1.sumOfFirstLast());
console.log(arr2.sumOfFirstLast());


let arr3 = [3, [5, 19, 18], 6, [
    [7, 19, 31],
    [14, 18, 20]
], 2];
let arr4 = [6, [4, 8], 11, [9, [10]], 13];


Array.prototype.innerMap = function(callback) {
    let arr = this;
        return arr.map(function(key) {
            if(Array.isArray(key)) {
                return key.innerMap(callback);
            }else {
                return callback(key);
            }
        })
}


console.log(arr3.innerMap(item => {
    return item + 2;
}));

console.log(arr4.innerMap(item => {
    return item + 2;
}));