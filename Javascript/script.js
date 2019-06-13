// Standard
function ageVerification(age){
  if (age > 25){
    console.log("Can rent car");
  }else{
    console.log("Not old enough");
  }
}
ageVerification(55); // Can rent car


// Ternary Operators
// Format: let variable1 = variable2 operator value1 ? If-True : If-False

// Recommended Ternary Operator (Sets Variable)
function ageVerification2(age){
  let answer = age > 25 ? "Can rent car" : "Not old enough";
  console.log(answer)
}
ageVerification2(5); // Not Old Enough

// Function in Ternary Operator
function ageVerification3(age){
  age > 25 ? console.log("Can rent car" : "Not old enough");
}
ageVerification3(30); // Can rent car
