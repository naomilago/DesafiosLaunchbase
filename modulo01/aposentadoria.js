const nome = "Doisberto"
const sexo = "Masculino"
const idade = 80
const contribuicao = 5
const regra = idade + contribuicao

if (sexo === "Masculino") {
  if (regra >= 95) {
    console.log(`${nome}, você pode se aposentar!`)
  } else {
    console.log(`${nome}, você não pode se aposentar!`)
  }
} else if (sexo === "Feminino") {
  if (regra >= 85) {
    console.log(`${nome}, você pode se aposentar!`)
  } else {
    console.log(`${nome}, você não pode se aposentar!`)
  }
}