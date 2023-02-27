function outerFunc()  {
    let a = 10;
    function innerFunc()  {
        console.log(a);
    }
    innerFunc()
}

outerFunc();

// → 10 