let fruits = ['apple', 'banana', 'strawberry', 'watermelon']

for(let i = 0; i < fruits.length; i++ ){
    console.log(fruits[i])
}
console.log('----------------')
for(fruit of fruits){
    console.log(fruit)
}
console.log('----------------')
fruits.forEach((el)=>console.log(el))

let numbers = [1, 2, 3, 4, 5, 6]

let number1 = numbers.filter((el)=>{ return el < 3})
console.log(number1)

let number2 = numbers.find((el)=>el > 3)
console.log(number2)

let number3 = numbers.map((el)=>el*2)
console.log(number3)

number3.push(10)
console.log(number3)

number3.pop()
console.log(number3)

number3.shift()
console.log(number3)

console.log(number3.includes(6))

console.log(number3.indexOf(8))