const name = "John"
const gender = "Male"
const age = 80
const contribuition = 5
const rule = age + contribuition

if (gender === "Male") {
  if (rule >= 95) {
    console.log(`${name}, you can retire!`)
  } else {
    console.log(`${name}, you can't retire!`)
  }
} else if (gender === "Feminino") {
  if (rule >= 85) {
    console.log(`${name}, you can retire!`)
  } else {
    console.log(`${name}, you can't retire!`)
  }
}