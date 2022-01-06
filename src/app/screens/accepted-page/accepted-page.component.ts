import { Component, OnInit } from '@angular/core'
import { Alert } from 'src/app/constants/Alert'

@Component({
	selector: 'app-accepted-page',
	templateUrl: './accepted-page.component.html',
	styleUrls: ['./accepted-page.component.scss']
})
export class AcceptedPageComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	close() {
		Alert('Transaction is successful.', 'You may close the window.', 'info')
	}
}
