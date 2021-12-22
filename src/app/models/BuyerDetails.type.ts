import { Product } from './Product.type'

export type BuyerDetails = {
	product?: Product
	name: string
	email: string
	mobile: string
	address: string
	city: string
	country: string
	zipCode: string
	landMark: string
}
