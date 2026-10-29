//positive even number scenario
//assigning a input to a variable
var a =-9;

if(a%2==0 && a>0){
    console.log("This is a positive even number");
}
else if(a%2==0 && a<0) {
    console.log("This is a negative even number");
}
else if(a%2>0 && a>0){
    console.log("This is positive odd number");
}
else if(a%2<0 && a<0){
    console.log("This is negative odd number");
}
else{
    console.log("This number is zero")
}
