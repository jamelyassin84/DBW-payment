import { PaymentService } from './../../services/payment.service'
import { Component, OnInit } from '@angular/core'
import { Alert } from 'src/app/constants/Alert'
import { SuccessfulPayment } from 'src/app/models/SucessfulyPayument'

@Component({
	selector: 'app-accepted-page',
	templateUrl: './accepted-page.component.html',
	styleUrls: ['./accepted-page.component.scss']
})
export class AcceptedPageComponent implements OnInit {
	constructor(private service: PaymentService) {}

	ngOnInit(): void {
		this.storePayment()
	}

	data!: SuccessfulPayment
	storePayment() {
		let transaction = localStorage.getItem('tran_ref')
		this.service.create({ transaction: transaction }).subscribe(
			(data: SuccessfulPayment) => (this.data = data),
			() => {
				Alert('Something went wrong', 'Please try again.', 'error')
			}
		)
	}

	resolveName(name: string) {
		let nameArray = name.split(' ')
		return nameArray[0]
	}

	close() {
		Alert('Transaction is successful.', 'You may close the window.', 'info')
	}
}
