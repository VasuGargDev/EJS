// minimum function

let min = (a,b)  =>  {
    if(a<b) return a;
    else return b;
}

console.log(min(12,13));
console.log(min(0,-10));

//recurssion
function isEven(x)  {
    if(x==0) return true;
    else if (x==1) return false;
    else if (x<0) return isEven(-x);
    else return isEven(x-2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//Bean counting

function countBs(str)  {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "B") {
        count += 1;
      }
    }
    return count;
  }  
console.log(countBs("BBC"));