const users = [
  { name: 'Luke', technologies: ['HTML', 'CSS'] },
  { name: 'James', technologies: ['JavaScript', 'CSS'] },
  { name: 'Wayne', technologies: ['HTML', 'Node.js'] }
]

function checkCSS(user){
  for (technology of user.technologies) {
    if (technology == 'CSS') {
      return true
    }
  }
} 

for (user of users) {
  const usesCSS = checkCSS(user)
  if (usesCSS) {
    console.log(`${user.name} works with CSS!`)
  }
}