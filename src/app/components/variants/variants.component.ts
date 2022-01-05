import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { groupByKey } from 'src/app/constants/helpers'
@Component({
	selector: 'app-variants',
	templateUrl: './variants.component.html',
	styleUrls: ['./variants.component.scss']
})
export class VariantsComponent implements OnInit {
	constructor() {}

	@Input() variants: any = []

	selectedVariants: any[] = []

	@Output() onSelect: any = new EventEmitter()

	types: any[] = []

	variantArray: any[] = []

	ngOnInit(): void {
		this.processVariants()
	}

	processVariants() {
		this.variantArray = groupByKey(this.variants, 'name')
	}

	selectVariant(value: string, name: string) {
		const data = {
			name: name,
			value: value
		}
		for (let index = 0; index < this.selectedVariants.length; index++) {
			if (this.selectedVariants[index].name === name) {
				this.selectedVariants.splice(index, 2)
				this.types.splice(index, 2)
				this.selectedVariants.push(data)
				this.types.push(value)
			} else {
				this.selectedVariants.push(data)
				this.types.push(value)
			}
		}
		if (this.selectedVariants.length === 0) {
			this.selectedVariants.push(data)
			this.types.push(value)
		}
		this.onSelect.emit(this.selectedVariants)
	}
}
