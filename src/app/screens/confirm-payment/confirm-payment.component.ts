import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { BuyerDetails } from 'src/app/models/BuyerDetails.type'
import { Product } from 'src/app/models/Product.type'
import { Variant } from 'src/app/models/Variant.type'

@Component({
	selector: 'app-confirm-payment',
	templateUrl: './confirm-payment.component.html',
	styleUrls: ['./confirm-payment.component.scss']
})
export class ConfirmPaymentComponent implements OnInit {
	constructor(private router: Router, private title: Title) {
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

	ngOnInit(): void {
		this.title.setTitle(`Make payment for ${this.product.product_name}`)
	}

	makePayment() {
		console.log(this.buyerDetails)
	}
}
