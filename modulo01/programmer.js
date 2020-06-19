const user = {
  name: 'Abner',
  age: 17,
  technologies: [
    { name: 'C++', specialty: 'Desktop' },
    { name: 'Python', specialty: 'Data Science' },
    { name: 'JavaScript', specialty: 'Web/Mobile' }
  ]
}

console.log(`The user ${user.name} is ${user.age} years old and uses ${user.technologies[0].name} as a ${user.technologies[0].specialty} speciality!`)