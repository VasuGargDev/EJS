function outerFunc()  {
    let a = 10;
    return function innerFunc()  {        //since we have moved the return statement here, a="ten" is now unreacghable to the lexical scope of innerFn 
        console.log(a);       
    }
    a = "ten";                
}                                            

let b = outerFunc();
console.log(b);     

b();
