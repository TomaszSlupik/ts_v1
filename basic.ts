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

// V przykład 

const priceCoffee = (num1:  number, num2: number): number => {
    return num1 + num2
}

console.log(`Za dwie kawy należy zapłacić ${priceCoffee(10, 15)} zł`)

// Map 
const colors = ['czerwony', 'biały', 'niebieski']

const colorsBig = colors.map(el => {
    return el.toUpperCase()
})

console.log(colorsBig)

// Void 
function printMsg (msg: string): void {
    console.log(msg)
    console.log(msg)
}

printMsg('Cześć')

// Never 
// Prykład 1:
// function makeError (msg: string): never {
//     throw new Error(msg)
// }

// makeError('błąd')

// Kolejny przykład: 

// function gameLoop(): never {
//     while(true) {
//         console.log("GAME LOOP")
//     }
// }

// Przykłady - cwiczenia
// przykład z Defaultem
function twoFer (nameFer: string = "you"): string {
    return `One for ${nameFer}, one for me`
}

console.log(twoFer())
console.log(twoFer('Elton'))

// 2 przykład
function isLeapYear (year: number):boolean {
    if (year === 2012) {
        return true
    }
    else {
        return false
    }
}

console.log(isLeapYear(2012))
console.log(isLeapYear(2013))
console.log(isLeapYear(2014))

// Obiekty
function personWorker (person: {name: string, age: number, salary: number, work: boolean}) {
    return `${person.name} ma ${person.age} lat. Zarabia ${person.salary} zł. Pracuje: ${person.work}`
}

console.log(personWorker({name: 'Piotr', age: 22, salary: 6000, work: true}))

