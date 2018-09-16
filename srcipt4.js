const multiple =(x) => {

    let currentSum = x;

    function f(y) {
        currentSum *= y;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}


console.log(multiple(6)(1)(2)(3)(4)(5));