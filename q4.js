

// str = "AbhiShek"

// ABHISHEK

// abhishek



// function checkCase(str){


//     if(str ==   str.toUpperCase()){
//           console.log("String is in uppercase")
//     }
//     else if(str == str.toLowerCase()){
//         console.log("String is in lowercase")
//     }
//     else{
//         console.log("String is in mixed case")
    
//     }
// }

// ramesh => ramesh


let countCapital = 0
let countSmall = 0
let countSpecial = 0
let countNumber = 0
function detectEachTYpe(str){

    for(let t of str){
       if(t>="A" && t<="Z"){
              countCapital++
       }
       else if(t>="a" && t<="z"){
            countSmall++
       }
       else if(t>="0" && t<="9"){
            countNumber++
       }
       else{
           countSpecial++
       }
    }
    console.log("Capital", countCapital)
    console.log("Small", countSmall)
    console.log("Number", countNumber)
    console.log("Special", countSpecial)

}

detectEachTYpe("RA,$Es(H12") // 