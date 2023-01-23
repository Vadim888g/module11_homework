function sum(a) {
    return function(b) {
        return a + b;
    };
}

let z = sum(5);
console.log( z(0), z(1), z(2) );

console.log( sum(1)(2), sum(2)(2), sum(40)(2) );