// let coffeeIsGrinding = false
// let pressGrindBeans = () => {
//     // does coffeeIsGrinding have a boolean value of true?
//     if(coffeeIsGrinding){
//         console.log("stopping the grind")
//         coffeeIsGrinding = false
//     } else {
//         console.log("grinding about to begin")
//         coffeeIsGrinding = true
//     }
// }
// pressGrindBeans()


// let greeting = (firstName, surname) => {
//     console.log(`hello ${firstName}, your surname is ${surname}`)
// }
// greeting("leon", "vader")
// greeting("christian", "kenobi")

// let add = (num1, num2) => {
//     return num1 + num2
// }
// add(2, 3)

// const minus = (fah) => {
//     return fah - 32
// }

// const getCel = (fah) => {
//     return minus(fah) * 5/9
// }

// console.log("the celsius is " + getCel(59))

// let sayHello = name => `hello ${name}`


// function sayGoodbye(name) {
//     return `goodbye ${name}`
// }

// console.log(sayHello("leon"))
// console.log(sayGoodbye("leon"))
// let alarm = true
// let day = "saturday"

// let alarmClock = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am",
// }

// if(alarm === true && day === "saturday"){
//     console.log(alarmClock.weekendAlarm)
// }else if(alarm === true && day === "sunday"){
//     console.log(alarmClock.weekendAlarm)
// }else if(alarm === true){
//     console.log(alarmClock.weekdayAlarm)
// }else{
//     console.log(alarmClock.weekendAlarm)
// }


let twoNums = {
    add:(num1, num2) => {
        return  num1 + num2
    }
}

console.log(twoNums.add(1, 3))