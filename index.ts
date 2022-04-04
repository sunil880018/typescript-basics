// declaring variables
let id : number = 5

id = 10
let x : String = 'Sunil'

var check : boolean = true

// array

let ids : number[] = [1,2,3,4]
let arr : any[] = [1,2,true,'Hello']

// tuple 

let person : [number,string,boolean] = [1,'Jony',true]

// tuple array

let employee : [number,string][]

employee = [
    [1,'John'],
    [2,'Dolly'],
    [3,'Dimpy']
]

console.log(employee)

// Union

let pid : string | number
pid = 23

// Enum

enum Direction1 {
    Up, // 0 you can also initialize from other value
    Down, // 1
    Left, // 2
    Right, // 3
}

console.log(Direction1.Left) // 2

// Objects

type User = {
    id : number
    name : string
}
const user : User = {
    id:1,
    name:'John'
}

// Type Assertion

let cid : any = 1

// let customerId = <number> cid

let customerId = cid as number

// Functions

function addNum(x:number,y:number):number{
    return x + y
}

console.log(addNum(10,78))

// void 

function log(message:number | string):void{
    console.log(message)
}

console.log(log(4))
console.log(log('four'))

// Interfaces, nothing but an object
// see documentation about interfaces
interface UserInterface{
    id:number
    name : string
    age?:number // if dont want to use, (?)
}

const user1 : UserInterface = {
    id:10,
    name:'John'
}
console.log(user1)

interface MathFunc {
    (x:number,y:number):number
}

const add:MathFunc = (x:number,y:number):number => x+y
console.log(add)

