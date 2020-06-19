const user = {
  name: 'Diego',
  company: {
    name: 'Rocketseat',
    color: 'Purple',
    focus: 'Programming',
    address: {
      street: 'Guilherme Gembala',
      number: 260
    }
  }
}

console.log(`The company ${user.company.name} is situated in ${user.company.address.street} street, ${user.company.address.number}!`)