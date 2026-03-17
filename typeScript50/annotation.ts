// String

let myName: String = "Saloni"
console.log(myName)

// Number

let myAge: Number = 24
console.log(myAge)

// Boolean

let isStudent: Boolean = true
console.log(isStudent)

// Any

let randomValue: any = "Hello"
randomValue = 42
randomValue = true
console.log(randomValue)

// Void

function greet(): void {
  console.log("Hello, World!")
}
greet()

// Null and Undefined

let myNull: null = null
let myUndefined: undefined = undefined
console.log(myNull)
console.log(myUndefined)

// Never

function throwError(message: string): never {
  throw new Error(message)
}
// throwError("This is error")

// ---> Functions Parameters and Annotations <---

// Regular Func
function addOne(num: number) {
  return num + 1
}
console.log(addOne(5))

// Arrow Func
const double = (x: number, y: number) => x * y
console.log(double(3, 4))
