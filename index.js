//calsswork ex/1

let cars = require("./cars");

let discount = cars.filter((car) => {
    return car.price * 0.7 > 40000
}).length

//console.log(discount)




//classwork ex/2

let words = ["gal", "aya", "hadar", "necromancer", "noam", "alex", "stav"];

let names = words.filter((word, index) => {
    index = 0
    return word.length > 3
})

//console.log(names)




//calsswork ex/3

