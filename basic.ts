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

// 2 przykład obiektu

let cordinate: {x: number, y: number} = {x: 30, y: 20}

console.log(cordinate)

function randomCordinate (): {x: number, y: number} {
    return { x: Math.random(), y: Math.random()}
}
// obiekt jako Alias 
type Coffee = {
    milk: string,
    coffee: string,
    mug: number
}

const coffeeDrink = (coffee: Coffee) => {
    return `Dzisiaj piję kawę: ${coffee.milk} mleka, ${coffee.coffee} kawy w ${coffee.mug} kubku`
}

console.log(coffeeDrink({milk: '100ml', coffee: '2g', mug: 1}))

// obiekt w obiekcie + funkcja strzałkowa
const describeMen = (person: {
    first: string,
    second: string,
    age: number,
    parentsPerson: {
        mom: string,
        dad: string
    }
}) => {
    return `Pracownik ${person.first} ${person.second}, który ma ${person.age} lat, ma rodziców ${person.parentsPerson.mom} i ${person.parentsPerson.dad}`
}

console.log(describeMen({first: "Krzysiek", second: "Kowalski", age: 22, parentsPerson: {mom: "Anna", dad: "Jan"}}))

// obiket w obiekcie z typem + zwykła funkcja 

type Training = {
    name: string,
    time: number,
    person: {
        name: string,
        age: number
    }
}

function trainingPerson (training: Training) {
    return `Trening ${training.name} trwał ${training.time} min. Trener: ${training.person.name}, ${training.person.age} lat`
}

console.log(trainingPerson({name: "Bieganie", time: 45, person: {name: 'Krzysiek', age: 33}}))

// Parametr opcjonalny
type Threenumber = {
    x: number,
    y: number,
    z? : number
}

const addNumber = (threenumber: Threenumber) => {
    return threenumber.x + threenumber.y + threenumber.z
}


console.log(addNumber({x: 10, y: 20, z: 20}))

// Parametr tylko do odczytu
type Clerk = {
    readonly id: number;
    name: string;
}

const clerk: Worker = {
    id: 1,
    name: "Franek"
}


// Połączenie typów - obiekty 
type Circle = {
    radius: number
}

type Color = {
    color: string
}

type ColorCircle = Circle & Color

const joinColorCircle: ColorCircle = {
    radius: 10,
    color: 'gold'
}

console.log(joinColorCircle)

// Połączenie typów + dodatkowy typ 
type Cat = {
    levelTrain: string
}

type Dog = {
    breed: string
}

type CatDog = Cat & Dog & {
    age: number
}

const catdog: CatDog = {
    levelTrain: "hard",
    breed: "Husky",
    age: 3
}

console.log(catdog)

// przykłady - obiekty 
