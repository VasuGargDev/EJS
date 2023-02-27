function wrapValue(n) {
    let local = n;                    
    return local;                //arrow fn removed
    }
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1);               //as well as wrap function braces removed
// → 1
console.log(wrap2);               //as well as wrap function braces removed
// → 2