
localStorage.setItem("saludo", "Hola")
localStorage.setItem("cantidad", 33)

const saludo = localStorage.getItem("saludo")
const cant = localStorage.getItem("cantidad")

// console.log(saludo)
console.log(typeof cant) //string
// ParseInt() -> Parsear a entero
// ParseFloat() -> Parsear a decimal
// localStorage.removeItem("saludo")
// localStorage.clear()

// console.log(localStorage.key(1))

// JSON (Java Script Object Notation)
const user = { name: "Pepe", age: 40, address: "Calle falsa 123", isAdmin: false, }
const userString = JSON.stringify(user)

localStorage.setItem("user", userString)

const remeberedUser = localStorage.getItem("user")
const parsedUser = JSON.parse(remeberedUser)
console.log(parsedUser)
