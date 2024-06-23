
let str = "abhishek"   

//abh  str.slice(0,3)
//bhi  str.slice(1,4)
// his  str.slice(2,5)
// ish  str.slice(3,6)
// she  str.slice(4,7)
// hek  str.slice(5,8)

 // "abhishek"
for(let i = 0; i<=str.length-3; i++){
    // i=0
    let x = str.slice(i,i+3) 
    // i = 0 => 0,3
    // i = 1 =>  1,4
    // i = 2 => 2,5
    // i = 3 => 3,6
    // i = 4 => 4,7
    // i = 5 => 5,8
    // str.slice(6,9) => ek
    
    
    
    
    // (0,3), (1,4), (2,5), (3,6), (4,7), (5,8), (6,9)
    // x = str.slice(i,i+3) //
    // if(x.length<3){
    //     break
    // }
    // console.log(x)

    
}



// "gfasydgweojfherpighjpiw4thji"