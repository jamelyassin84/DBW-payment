import { Product } from './Product.type'

export type SuccessfulPayment = {
	buyer: User
	seller: User
	payment: Payment
	product: Product
	summary: Summary
}
type Summary = {
	amount: string
	buyer_id: number
	created_at: any
	id: number
	product_id: number
	quantity: number
	reference_number: string
	seller_id: number
	updated_at: string
}

type User = {
	alt_phone: string
	area_code: string
	country_code: string
	created_at: any
	currency: string
	email: string
	email_verified_at: any | boolean
	id: number
	is_logged_in: number
	name: string
	phone: string
	type: string
	updated_at: any
}

export type Payment = {
	cart_amount: string
	cart_currency: string
	cart_description: string
	cart_id: string
	serviceId: number
	trace: string
	tran_ref: string
	tran_type: string
	shipping_details: ShippingDetails
	customer_details: CustomerDetails
	payment_info: PaymentInfo
	payment_result: PaymentResult
}

type PaymentResult = {
	response_code: string
	response_message: string
	response_status: string
	transaction_time: any
}

type PaymentInfo = {
	card_scheme: string
	card_type: string
	payment_description: string
}

type CustomerDetails = {
	city: string
	country: string
	email: string
	ip: string
	name: string
	state: string
	street1: string
}
type ShippingDetails = {
	city: string
	country: string
	email: string
	ip: string
	name: string
	state: string
	street1: string
}
