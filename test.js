//console.warn
console.warn("am my your mate")

//console.info
console.info("Hello! click here for more details")

////console.debug
console.debug("What is wrong")


//Using console.log
console.log([{name: "Shaybah", age: 25}, {name: "Shuhbah", age: 23}, {name: "shahby", age: 24}])

//Using console.table
console.table([{name: "Shaybah", age: 25}, {name: "Shuhbah", age: 23}, {name: "shahby", age: 24}])

//using console.group
console.group("Student Info")
console.log("Name: Shaybah")
console.log("Age: 26")
console.log("class: 200level")
console.groupEnd()

//using console.groupCollapse
console.groupCollapsed("Class Details")
console.log("Private Class Names");
console.log("SS1: Bala");
console.log("SS2: Balogun");
console.log("SS3: Isa");
console.groupEnd()

////console.assert logs a message only if the assertion is false
console.assert(1 === 2, "Assertion failed: 1 is not equal to 2")
console.assert(1 === 1, "Assertion passed: 1 is not equal to 1")

//using console.clear()
//console.clear()


//console.count()/console.countReset; logs the number of times count() is called with a specific label
console.count("money")
console.count("money")
console.count("money")
console.countReset("money")

//using console.time/console.timeEnd to measure the time between calls
console.time("Time Starts")
function add(a, b) {
    return a * b
}
add(3,4)
console.timeEnd("Time Starts")


//console.trace; this outputs a stack trace at the point its called;
function find(love) {
    console.trace(`I love ${love}`)
}
find("Allah")



// console.log(Naheem)
// console.log("Naheem")

// let Naheem;
// console.log(Naheem)
// console.log("Naheem")


let Naheem;
console.log(Naheem ?? "Mujahhid")
console.log("Naheem")

console.log(2*9)

const users = [
    {id:1, name:"Haroon"},
    {id:2, name:"Musa"},
    {id:3, name:"Muhmin"},
]

const result = users.find(
    user => user.id > 1
)
console.log(`result.name: ${result.name}`);

const results = users.filter(
    user => user.id > 1
)
console.log(results.name);

const resultx = users.filter(user => user.id > 1);
console.log(resultx.map(user => user.name));

console.log("I'm your friend not your enemy")

console.log(1 === 1)
console.log("1" === 1)

// const Williams-book = "Williams"

//can you see my screen 