//recurssion example

const myFunc = str =>  {
    if (str.length > 1)  {
        return myFunc(str.slice(1));
    }

    return str;
};

console.log(myFunc('Hello World'));

