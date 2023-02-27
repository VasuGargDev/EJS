function outerFunc()  {
    let a = 10;
    return function innerFunc()  {          //return statement added here
        console.log(a);
    }
                                            // retur statement removed from here
}

let b = outerFunc();
console.log(b);     

b();