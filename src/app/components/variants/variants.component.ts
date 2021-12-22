import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

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

	ngOnInit(): void {}

	types: any[] = []
	selectVariant(variant: string, title: string) {
		const data = {
			variant: title,
			variants: variant
		}
		for (let index = 0; index < this.selectedVariants.length; index++) {
			if (this.selectedVariants[index].variant == title) {
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
		this.onSelect.emit(this.selectedVariants)
	}
}
