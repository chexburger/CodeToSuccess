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
  let answer = age > 25 ? ("Can rent car" : "Not old enough");
  console.log(answer)
}
ageVerification2(5); // Not Old Enough

// Function in Ternary Operator
function ageVerification3(age){
  age > 25 ? console.log("Can rent car" : "Not old enough");
}
ageVerification3(30); // Can rent car


// For Loop
var array = ["Aye","Bee","See","Dee","Eee","Eff","Jee"];
for(var i=0; i < array.length; i++){
	console.log(array[i]); // Aye | Bee | See | Dee | Eee | Eff | Jee
};

// For Each
var array = ["Aye","Bee","See","Dee","Eee","Eff","Jee"];
array.forEach(function(element){
	console.log(element); // Aye | Bee | See | Dee | Eee | Eff | Jee
});

// Looping through Objects
var dic = {
	hello: "Value1",
	state: "Iowa",
};
for (var key in dic){
	console.log(key + " => " + dic[key]); // hello => Value1 | state => Iowa
}

// While Loop (Conditional Check before initial Run)
var arr2 = ["One","Two","Seven"];
var i=0;
while(i < arr2.length){
  console.log(arr2[i]); // One | Two | Three
  i++;
}

// Do Loop (Conditional Check after intitial Run)
var arr2 = ["One","Two","Seven"];
var i = 0;
do{
  console.log(arr2[i]); // One | Two | Three
  i++;
} while(i < arr2.length)
