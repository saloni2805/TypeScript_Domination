class Person {
  private first: string
  public last: string
  protected age: number

  constructor(first: string, last: string, age: number) {
    this.first = first
    this.last = last
    this.age = age
  }

  getDetails(): String {
    return `My name is ${this.first} and last is ${this.last} and age is ${this.age}`
  }
}

class me extends Person {
  constructor(first: string, last: string, age: number) {
    super(first, last, age)
  }
}

let p1 = new me("ss", "pp", 8)
console.log(p1.getDetails())
