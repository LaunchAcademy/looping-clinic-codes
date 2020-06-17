// Ask the user for a name
// Ask the user how many times we should say hello
// say hello the number of times specified
// if the user's name is Sam, say "Hi there Sam I Am"
// added: ask the user if they want to be greeted!

const greetBoolean = confirm('Do you want to be greeted?')

// let n = 1
// while (n <= numberOfHellos) {
//   console.log(`Hello ${userName}`)
// }

if (greetBoolean) {
  const userName = prompt("Hello and welcome! What's your name?")
  const formattedUserName = userName.trim()
  // if (formattedUserName !== null && formattedUserName !== '') {
  // if (!!formattedUserName === true) {
  // if (!!formattedUserName) {
  if (formattedUserName) {
    let numberOfHellos = prompt('How many times should we greet you?')

    while (numberOfHellos > 0) {
      if (formattedUserName === 'Sam') {
        console.log(`Hello Sam I Am on hello #${numberOfHellos}`)
      } else {
        console.log(`Hello ${formattedUserName} on hello #${numberOfHellos}`)
      }
      numberOfHellos--
    }
  } else {
    console.log('Next time, please give us your name.')
  }
}
