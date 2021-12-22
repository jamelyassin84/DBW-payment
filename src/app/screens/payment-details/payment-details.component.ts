import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router'
import { sentincify } from 'src/app/constants/helpers'
import { BuyerDetails } from 'src/app/models/BuyerDetails.type'
import { Product } from 'src/app/models/Product.type'
import { Variant } from 'src/app/models/Variant.type'
import { ProductsService } from 'src/app/services/products.service'

@Component({
	selector: 'app-payment-details',
	templateUrl: './payment-details.component.html',
	styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {
	constructor(
		private router: Router,
		private service: ProductsService,
		private route: ActivatedRoute,
		private title: Title
	) {
		let extras: any = this.router.getCurrentNavigation()?.extras.state
		if (extras === undefined) {
			extras = JSON.parse(localStorage.getItem('extras') + '')
		} else {
			localStorage.setItem('extras', JSON.stringify(extras))
		}
		this.chosenVariants = extras.chosenVariants
		this.getProduct(extras.slug)
	}

	product: Product | undefined | any = undefined
	chosenVariants!: Variant[] | any

	buyerDetails: BuyerDetails | any = {}

	ngOnInit(): void {}

	getProduct(slug: string): void {
		this.service.show(slug).subscribe((product: Product) => {
			this.product = product
			this.title.setTitle(sentincify(product.product_name))
		})
	}

	submitForm() {
		this.buyerDetails.product = this.product
		this.router.navigate(['/confirm-payment'], { state: this.buyerDetails })
	}
}
