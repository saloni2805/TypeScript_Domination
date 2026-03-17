class myClass {
  private _myproperty: number = 0

  get myProperty(): number {
    return this._myproperty
  }

  set myProperty(value: number) {
    this._myproperty = value
  }
}

const myInstance = new myClass()

console.log(`curr val: ${myInstance.myProperty}`)
myInstance.myProperty = 10
console.log(`Curr val: ${myInstance.myProperty}`)
