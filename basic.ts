// Stringi
let first_name: string = 'Tomek'

first_name = 'Natalia'
first_name.toUpperCase()

// number 
const pricePhone: number = 3900

// Boolen
const gameOver: boolean = true

// any 
let thing: any = 'Krzysztof'
thing = 29
thing = true

// Function
// I przykład 
function sumNumber (sum: number) {
    return sum + sum
}

console.log(sumNumber(20))

// II przykład
function welcome (person: string) {
    return `Cześć ${person}`
}

console.log(welcome('Tomasz'))

// III przykład 
const personDetail = (firstName: string, age: number, online: boolean) => {
    return `${firstName}, ${age}, ${online}`
}

console.log(personDetail('Leszek', 33, true))

// IV przykład - default 

function drink (item: string = "Kawa") {
    return item
}

console.log(drink())

