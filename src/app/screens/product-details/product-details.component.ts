import { ProductsService } from './../../services/products.service'
import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/models/Product.type'
import { ActivatedRoute } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { sentincify } from 'src/app/constants/helpers'

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
	constructor(
		private service: ProductsService,
		private route: ActivatedRoute,
		private title: Title
	) {}

	product: Product | undefined = undefined
	image: string | any

	AppTitle = 'Rive'

	ngOnInit(): void {
		const slug: any = this.route.snapshot.paramMap.get('id')
		this.getProduct(slug)
		setInterval(() => {
			this.title.setTitle(this.AppTitle)
		}, 400)
	}

	getProduct(slug: string): void {
		this.service.show(slug).subscribe((product: Product) => {
			this.product = product
			this.image = product['image-url']

			setInterval(() => {
				this.title.setTitle(sentincify(product.slug))
			}, 400)
		})
	}

	changeImage(image: string) {
		this.image = image
	}
}
