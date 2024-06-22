

// let str = "papa"  // immutable

// str[0] = "k" 

// str = "kaka"

// console.log(str) // kapa


// let s1 = "papa"

// replace 
// replaceAll

// console.log(s1.replace("p","k"))
// let s2 = s1.replace("p","k")
// console.log(s2)

// console.log(s1.replaceAll("p","k"))



let str = "papa"


let s1 = "" // "kaka"
for(let t of str){ // 20 ms
    if(t == "p"){
        s1 = s1 + "k"
    }
    else{
      s1 = s1 + t
    }
}

console.log(s1)