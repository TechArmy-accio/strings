// 1. Password Strength Checker
// Problem: Design a function that checks if a given password is strong based on the following criteria:
// - At least 8 characters long
// - Contains at least one uppercase letter
// - Contains at least one lowercase letter
// - Contains at least one digit
// - Contains at least one special character (!@#$%^&*()-+)
// Example: Input: "P@ssw0rd" -> Output: "Strong password"
// Input: "weakpass" -> Output: "Weak password"


function passwordStrengthChecker(password){
      if(password.length < 8){
          return "Weak password"
      }
      let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      let smallLetters = "abcdefghijklmnopqrstuvwxyz"
      let digits = "0123456789"
      let specialCharacters = "!@#$%^&*()-+"
      let capitalCount = 0
        let smallCount = 0
        let digitCount = 0
        let specialCount = 0

        for(let t of password){ // "P@ssw0rd"

        } if(capitalLetters.includes(t)){
            capitalCount++
        }   
        else if(smallLetters.includes(t)){
            smallCount++
        }
        else if(digits.includes(t)){
            digitCount++
        }
        else if(specialCharacters.includes(t)){
            specialCount++
        }

        if(capitalCount>=1 && smallCount>=1 && digitCount>=1 && specialCount>=1){
            return "Strong password"
        }
        else{
            return "Weak password"
        }

}