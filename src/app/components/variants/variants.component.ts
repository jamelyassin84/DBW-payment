import { Component, OnInit, Input } from '@angular/core'

@Component({
	selector: 'app-variants',
	templateUrl: './variants.component.html',
	styleUrls: ['./variants.component.scss']
})
export class VariantsComponent implements OnInit {
	constructor() {}

	@Input() variants: any = []

	selectedVariants: any[] = []

	ngOnInit(): void {}

	types: any[] = []
	selectVariant(variant: string, title: string) {
		const data = {
			variant: title,
			variants: variant
		}
		for (let index = 0; index < this.selectedVariants.length; index++) {
			if (this.selectedVariants[index].variant == title) {
				alert('delete')
				this.selectedVariants.splice(index, 2)
				this.types.splice(index, 2)
				this.selectedVariants.push(data)
				this.types.push(variant)
			} else {
				this.selectedVariants.push(data)
				this.types.push(variant)
			}
		}
		if (this.selectedVariants.length === 0) {
			this.selectedVariants.push(data)
			this.types.push(variant)
		}

		console.log(this.selectedVariants)
		// console.log(this.types)
	}
}
