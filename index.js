function calculateTotal(items) {
return items.map(calculateNewTotal)

}

function calculateNewTotal(item){
let total = item.price *(1 - item.discount) * item.quantity
total = parseInt(total * 100) / 100
item.total = total
return item
}


module.exports = calculateTotal