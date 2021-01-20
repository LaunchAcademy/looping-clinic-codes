// Ask the user for a name
// Ask the user how many times we should say hello
// Say hello the number of times specified
// If the user's name is Sam, say "Hi there Sam I am!"
// Ask the user if they want to be greeted

//Part 1
// let userName = prompt("What's your name?")
// let numberOfHellos = prompt("How many times should we say hello?")

// while (numberOfHellos > 0) {
//   if (userName === "Sam"){
//     console.log("Hi there Sam I am.")
//   } else {
//     console.log(`Hi ${userName}`)
//   }
//   numberOfHellos--
// }

//Part 2
let greetConfirmation = confirm("Would you like to be greeted?");

if (greetConfirmation) {
  let userName = prompt("What's your name?");
  let numberOfHellos = prompt("How many times should we say hello?");
  while (numberOfHellos > 0) {
    if (userName === "Sam") {
      console.log("Hi there Sam I am!");
    } else {
      console.log(`Hi ${userName}!`);
    }
    numberOfHellos--;
  }
} else {
  console.log("Ok maybe tomorrow. Bye!");
}
