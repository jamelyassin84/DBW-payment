import { DOCUMENT } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Component, Inject, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BaseService } from 'src/app/services/base.service'

@Component({
	selector: 'app-stripe-cancel-page',
	templateUrl: './stripe-cancel-page.component.html',
	styleUrls: ['./stripe-cancel-page.component.scss']
})
export class StripeCancelPageComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private http: HttpClient,
		@Inject(DOCUMENT) private document: Document
	) {
		this.user = this.route.snapshot.paramMap.get('user')
		this.amount = this.route.snapshot.paramMap.get('amount')
	}

	amount: any = 0
	user: any

	ngOnInit(): void {}

	isProcessing = false

	withdraw() {
		this.isProcessing = true
		new BaseService(this.http, 'on-board')
			.create({
				amount: this.amount,
				user: this.user
			})
			.subscribe({
				next: (response) => {
					this.document.location.href = response.url
				},
				error: (error) => {
					this.isProcessing = false
					alert(JSON.stringify(error))
				},
				complete: () => {}
			})
	}
}
