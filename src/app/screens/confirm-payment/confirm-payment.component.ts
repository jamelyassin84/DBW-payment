import { CardToken } from './../../models/Card.type'
import { CheckOutService } from './../../services/check-out.service'
import { Component, Inject, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { BuyerDetails } from 'src/app/models/BuyerDetails.type'
import { Product } from 'src/app/models/Product.type'
import { Variant } from 'src/app/models/Variant.type'
import { DOCUMENT } from '@angular/common'
import { Alert } from 'src/app/constants/Alert'

@Component({
	selector: 'app-confirm-payment',
	templateUrl: './confirm-payment.component.html',
	styleUrls: ['./confirm-payment.component.scss']
})
export class ConfirmPaymentComponent implements OnInit {
	constructor(
		private router: Router,
		private title: Title,
		private service: CheckOutService,
		@Inject(DOCUMENT) private document: Document
	) {
		let extras: any = this.router.getCurrentNavigation()?.extras.state
		if (extras === undefined) {
			extras = JSON.parse(localStorage.getItem('extras') + '')
		} else {
			localStorage.setItem('extras', JSON.stringify(extras))
		}
		this.buyerDetails = extras
		this.product = extras.product
		this.chosenVariants = extras.chosenVariants
	}

	product: Product | undefined | any = undefined
	chosenVariants!: Variant[] | any

	buyerDetails: BuyerDetails | any = {}

	cardToken: CardToken | any = {} as any

	ngOnInit(): void {
		this.title.setTitle(`Make payment for ${this.product.product_name}`)
		this.setPaymentMethod('Apple')
	}

	paymentMethod!: PaymentMethod
	setPaymentMethod(method: PaymentMethod) {
		this.paymentMethod = method
	}

	isProcessing = false
	makePayment() {
		this.isProcessing = true
		this.buyerDetails['card_token'] = this.cardToken
		this.buyerDetails['paymentMethod'] = this.paymentMethod
		this.service.create(this.buyerDetails).subscribe(
			(checkOut: any) => {
				this.isProcessing = false
				this.document.location.href = checkOut.payment.redirect_url
			},
			() => {
				this.isProcessing = false
				Alert(
					'Something went wrong!',
					'Try Again in a few seconds. ',
					'error'
				)
			}
		)
	}
}
type PaymentMethod = 'Apple' | 'Visa'
