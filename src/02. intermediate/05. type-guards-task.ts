interface Order {
  address: string
}

interface TelephoneOrder extends Order {
  callerNumber: string
}

interface InternetOrder extends Order {
  email: string
}

type PossibleOrders = TelephoneOrder | InternetOrder | undefined

function isTelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
  return typeof order === 'object' && 'callerNumber' in order
}

function isInternetOrder(order: PossibleOrders): order is InternetOrder {
  return (order as InternetOrder)?.email !== undefined
}

function makeOrder(order: PossibleOrders) {
  if (isTelephoneOrder(order)) {
    console.log(order.callerNumber)
  } else if (isInternetOrder(order)) {
    console.log(order.email)
  }
}
