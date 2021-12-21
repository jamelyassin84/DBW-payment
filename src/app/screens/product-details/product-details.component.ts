import { ProductsService } from './../../services/products.service'
import { BaseService } from './../../services/base.service'
import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/models/Product.type'
import { ActivatedRoute } from '@angular/router'
import { switchMapTo } from 'rxjs'

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
	constructor(
		private service: ProductsService,
		private route: ActivatedRoute
	) {}

	product: Product | undefined = undefined

	ngOnInit(): void {
		const slug: any = this.route.snapshot.paramMap.get('id')
		this.getProduct(slug)
	}

	getProduct(slug: string): void {
		this.service.show(slug).subscribe((product: Product) => {
			this.product = product
			console.log(product)
		})
	}
}
