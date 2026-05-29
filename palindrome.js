//4.Create a JavaScript function that accepts a string, reverses it, and checks if the reversed 
let inputString = 'prem'
function palindrome(inputString)
{
    let reversedString =""
 for(let i=inputString.length-1;i>=0;i--)
 {
     reversedString = reversedString + inputString[i]
 }
    if(reversedString==inputString)
        {
        console.log(reversedString+" is palindrome")
        }
    else
        {
         console.log(reversedString+" is not palindrome")
        }
}
palindrome(inputString)
palindrome("mom")