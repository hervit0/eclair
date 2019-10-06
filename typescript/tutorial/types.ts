//  The never type
function error(message: string): never {
  throw new Error(message);
}

interface Dog {
  name: string
}

type MaybeDog = Dog | Error

// Simple Either control
function dog(name: string): MaybeDog {
  if (name == "") {
    return new Error("mh... what's the name of the good boi?")
  }
  return { name: name }
}

function sayDogName(maybeDog: MaybeDog): void {
  if (maybeDog instanceof Error) {
    throw error
  }
  console.log(maybeDog.name)
}

let d1 = dog("Rick")
sayDogName(d1)
let d2 = dog("")
sayDogName(d2)
