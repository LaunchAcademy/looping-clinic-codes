// Ask the user for a name
// Ask the user how many times we should say hello
// say hello the number of times specified
// if the user's name is Sam, say "Hi there Sam I Am"
// added: ask the user if they want to be greeted!
const greetingBoolean = confirm("do you want to be greeted")

if (greetingBoolean) {
  const userName = prompt("Hey what is your name?")

  if (userName.trim()) {

    const numOfGreetings = prompt("How many times should we say hello?")

    let i = 1
    while (i <= numOfGreetings) {
      if (userName === "Sam") {
        console.log("Hi there Sam I Am");
      } else {
        console.log(`Hi ${userName} for the ${i} time`);
      }
      // increment our counter
      // i = i +1
      // i += 1
      i++
    }
  } else {
    alert("Please provide a name next time")
  }
} else {
  alert("maybe next time")
}




