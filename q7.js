
let str = "madam"

// let str1 = "mad"

let str1 = ""  // "mad"
for(let t of str){
   
    // if( str1.includes(t) ==  false){
    //     str1 = str1 + t // mad
    // }
    if(str1.indexOf(t) == -1){
        str1 = str1 + t
    }

}

console.log(str1) // mad