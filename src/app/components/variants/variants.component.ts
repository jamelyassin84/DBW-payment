import { Component, OnInit } from '@angular/core'
import { variants } from './varitantsDummyData'

@Component({
	selector: 'app-variants',
	templateUrl: './variants.component.html',
	styleUrls: ['./variants.component.scss']
})
export class VariantsComponent implements OnInit {
	constructor() {}

	variants = variants
	ngOnInit(): void {
		console.log(this.variants)
	}
}
