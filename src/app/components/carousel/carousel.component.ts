import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { listAnimation } from 'src/app/animations/List.animation'

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
	animations: [listAnimation]
})
export class CarouselComponent implements OnInit {
	constructor() {}

	@Input() images: any[] | any
	@Input() first: any
	@Output() onSelect: any = new EventEmitter()

	imageToShow: any
	index: number = 0

	ngOnInit(): void {
		this.imageToShow = this.first
	}

	changeImage(image: any, index: number) {
		this.onSelect.emit(image)
		this.index = index
	}
}
