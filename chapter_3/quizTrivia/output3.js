function outerFunc()  {
    let a = 10;
    function innerFunc()  {
        console.log(a);
    }
    return innerFunc;            
}

let b = outerFunc();
console.log(b);     


b();                          //
