const users = [
  { name: 'Luke', technologies: ['HTML', 'CSS'] },
  { name: 'James', technologies: ['JavaScript', 'CSS'] },
  { name: 'Wayne', technologies: ['HTML', 'Node.js'] }
]

for (user of users) {
  console.log(`${user.name} works with ${user.technologies.join(' and ')}`)
}