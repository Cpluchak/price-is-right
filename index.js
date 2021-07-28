const calculateTotal = items => items.map(calculateNewTotal)

const calculateNewTotal = item => {
  let rawTotal = item.price * (1 - item.discount) * item.quantity
  let total = parseInt(rawTotal * 100) / 100

  return {...item, total}
}

module.exports = calculateTotal