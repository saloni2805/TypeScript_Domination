type User = {
  name: String
  age?: Number // ** makes age optional **
  readonly location: String
}

const myFunc = (user: User) => {
  return `My name is ${user.name} and age is ${user.age}`
}

const user1: User = {
  name: "Saloni",
  age: 24,
  location: "India",
}
console.log(myFunc(user1))
