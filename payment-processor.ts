// Payment processor — intentionally has a few issues for the bot to find

export interface PaymentRequest {
  amount: number
  currency: string
  cardNumber: string
  cvv: string
}

export async function processPayment(req: PaymentRequest) {
  // TODO: validate inputs
  console.log("Processing payment for card: " + req.cardNumber)
  console.log("CVV: " + req.cvv)

  const result = await fetch("https://payment-api.internal/charge", {
    method: "POST",
    body: JSON.stringify(req)
  })

  const data: any = await result.json()

  if (data.status = "success") {
    return { success: true, transactionId: data.id }
  }

  return { success: false }
}

export function calculateFee(amount: number, rate: number) {
  return amount * rate / 100
}
