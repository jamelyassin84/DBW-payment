import { Component, OnInit, Input } from '@angular/core'

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	constructor() {}

	@Input() image: any
	@Input() title: any
	@Input() brief_description: any
	@Input() price: any
	@Input() variants: any
	@Input() currency: any

	ngOnInit(): void {}
}
