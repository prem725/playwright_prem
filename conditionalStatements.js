//3.Create and call two JavaScript functions: `launchBrowser` with `if-else` 
// for browser launch messages, and `runTests` with `switch` for test type messages. 

let browserName = "chrome"
let runTest ="smoke"
function launchBrowser(browserName)
{
if(browserName == "chrome")
{
    console.log("browserName"+browserName)
}
else if(browserName == "firefox")
{
   console.log("browserName"+browserName)
}
else if(browserName == "edge")
{
   console.log("browserName"+browserName)
}
else
{
 console.log("browserName not found"+browserName) 
}
}
launchBrowser(browserName)

function runTests(runTest)
{
switch (runTest)
{
    case "sanity" : 
    console.log(runTest+" testing") 
    break
    case "regression" : 
    console.log(runTest+" testing") 
    break
    default:
    console.log("Smoke testing") 
    break
}
}
runTests(runTest)