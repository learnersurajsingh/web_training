const myNums = [1, 2, 3]

const init =0

const myTotal = myNums.reduce((acc, curr)=> acc + curr, init)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const cartTotal = shoppingCart.reduce((acc, item)=> acc+item.price,0)
console.log(cartTotal);