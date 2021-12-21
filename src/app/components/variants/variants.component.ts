import { Component, OnInit, Input } from '@angular/core'
import { variants } from './varitantsDummyData'

@Component({
	selector: 'app-variants',
	templateUrl: './variants.component.html',
	styleUrls: ['./variants.component.scss']
})
export class VariantsComponent implements OnInit {
	constructor() {}

	@Input() variants: any = []

	selectedVariants: any[] = []

	variantsCount = 0
	ngOnInit(): void {
		this.variantsCount = variants.length
	}

	types: any[] = []
	selectVariant(variant: string, title: string) {
		const data = {
			variant: title,
			variants: variant
		}
		for (let index = 0; index < this.selectedVariants.length; index++) {
			if (this.selectedVariants[index].variant !== title) {
				if (this.selectedVariants[index].variants !== variant) {
					this.selectedVariants.push(data)
					this.types.push(variant)
				}
			} else {
				this.selectedVariants.splice(index, 1)
				this.selectedVariants.push(data)
				this.types.splice(index, 1)
				this.types.push(variant)
			}
		}
		if (this.selectedVariants.length === 0) {
			this.selectedVariants.push(data)
			this.types.push(variant)
		}
	}
}
