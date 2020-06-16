const nome = "Umberto"
const peso = 85 // em quilos 
const altura = 1.69 // em metros
const imc = peso / (altura * altura)

if (imc >= 30) {
  console.log(`${nome}, você está acima do peso`)
} else if (imc < 29.9) {
  console.log(`${nome}, você não está acima do peso`)
}