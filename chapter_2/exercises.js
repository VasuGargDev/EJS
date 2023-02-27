//EJS chapter 2

//looping a triangle

triangle=""
for(i=0;i<7;i++){
  for(j=0;j<=i;j++){
    triangle += "#";
  }
  triangle += "\n";
}
console.log(triangle);

//by author
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

  

//FizzBuzz

for(i=1;i<=100;i++){
  if(i%3==0){
    if(i%5==0){
      console.log("FizzBuzz");
    }
    else{
      console.log("Fizz");
    }
  }  
  else{
    if(i%5==0){
      console.log("Buzz");
    }
    else{
      console.log(i);
    }
  }
}

//by author
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}


//ChessBoard

let output = "";
for (let flag = 1; flag <= 8; flag++){
  for (let n = 1; n <= 8; n++) {
    if(flag%2 != 0){
      if (n % 2 == 0) output += "#";
      else output += " ";
    }  
    else{
      if (n % 2 == 0) output += " ";
      else output += "#";
    }
  }
  output += "\n"
}    
console.log(output);


//by author
let board = "";
for (let y = 0; y < 8; y++) {
  for (let x = 0; x < 8; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } 
    else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);