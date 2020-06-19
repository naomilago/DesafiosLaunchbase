const name = "Umberto"
const weight = 85 // em quilos 
const height = 1.69 // em metros
const bmi = weight / (height * height)

if (bmi >= 30) {
  console.log(`${name}, you are over overweight!`)
} else if (bmi < 29.9) {
  console.log(`${name}, you are not overweight!`)
}