//2.Create a JavaScript function that determines if a number is positive, negative, 
// or zero and returns a corresponding string indicating the type. 
let number =-1
function numberType(number)
{
if(number>0)
{
    console.log("Number "+number+" is positive")
}
else if(number<0)
{
   console.log("Number "+number+" is negative") 
}
else
{
   console.log("Number "+number+" is Zero")  
}
}
numberType(number)
numberType(1)
numberType(0)