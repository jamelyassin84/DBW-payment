import { Injectable } from '@angular/core'
import { BaseService } from './base.service'
import { HttpClient } from '@angular/common/http'

@Injectable({
	providedIn: 'root'
})
export class PaymentService extends BaseService {
	constructor(private _http: HttpClient) {
		super(_http, 'pay-tabs', '')
	}
}
