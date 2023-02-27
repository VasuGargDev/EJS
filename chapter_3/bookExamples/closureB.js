function wrapValue(n) {
    let local = n;
    return local;                           //arrow fn removed
    }
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// →
console.log(wrap2());
// →

// → Type error: wrap1 is not a function