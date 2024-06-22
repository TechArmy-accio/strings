

function sumOfDigits(str){ // "4567"
   let sum = 0
    for(let t of str){ // "4"
      sum = sum + (+t)
    }
    console.log(sum)

}

sumOfDigits("4567") // 22