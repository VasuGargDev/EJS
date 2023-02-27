

//Bean counting 
//MODIFIED  

function countChar(str, ch)  {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ch) {
      count += 1;
    }
  }
  return count;
}

function countBs(str)  {
  return countChar(str, "B");
  }
  
  

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));