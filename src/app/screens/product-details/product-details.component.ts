import { ProductsService } from './../../services/products.service'
import { Component, Inject, OnInit } from '@angular/core'
import { Product } from 'src/app/models/Product.type'
import { ActivatedRoute, Router } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { sentincify } from 'src/app/constants/helpers'
import { CheckOutService } from 'src/app/services/check-out.service'
import { DOCUMENT } from '@angular/common'
import { Alert } from 'src/app/constants/Alert'
import { listAnimation } from 'src/app/animations/List.animation'

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss'],
	animations: [listAnimation]
})
export class ProductDetailsComponent implements OnInit {
	constructor(
		private service: ProductsService,
		private route: ActivatedRoute,
		private title: Title,
		private router: Router,
		private checkOutService: CheckOutService,
		@Inject(DOCUMENT) private document: Document
	) {}

	product: Product | undefined | any = undefined
	image: string | any

	AppTitle = 'Rive'

	ngOnInit(): void {
		const slug: any = this.route.snapshot.paramMap.get('id')
		this.getProduct(slug)
	}

	getProduct(slug: string): void {
		this.service.show(slug).subscribe((product: Product) => {
			this.product = product
			this.image = product['url']
			setInterval(() => {
				this.title.setTitle(
					`${this.AppTitle}  | ${sentincify(product.slug)}`
				)
			}, 1000)

			setTimeout(() => {
				setInterval(() => {
					this.title.setTitle(`Payment made easier @${this.AppTitle}`)
				}, 4000)
			}, 4000)
		})
	}

	changeImage(image: string) {
		this.image = image
	}

	setChosenVariants(variants: any) {
		this.product.chosenVariants = variants
	}

	isProcessing = false
	makePayment() {
		let data: any = {
			slug: this.product.slug,
			product: this.product
		}
		if (this.product.chosenVariants) {
			data.chosenVariants = this.product.chosenVariants
		}
		this.isProcessing = true
		this.checkOutService.create(data).subscribe(
			(checkOut: any) => {
				this.isProcessing = false
				this.document.location.href = checkOut.redirect_url
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
