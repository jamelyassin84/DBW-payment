import { environment } from './../../environments/environment.prod'
import { Injectable } from '@angular/core'
import { BaseService } from './base.service'
import { HttpClient } from '@angular/common/http'

@Injectable({
	providedIn: 'root'
})
export class ProductsService extends BaseService {
	constructor(private _http: HttpClient) {
		super(_http, 'products', '')
	}
}
