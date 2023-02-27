function outerFunc()  {
    let a = 10;
    function innerFunc()  {         
        console.log(a);       //this a is the reference not the exact value of a
    }
    a = "ten";                
    return innerFunc;
}                                            

let b = outerFunc();
console.log(b);     

b();

//the latest value will be taken