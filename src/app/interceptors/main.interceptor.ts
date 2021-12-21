import { Injectable } from '@angular/core'
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpErrorResponse
} from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs'
import { Alert } from '../constants/Alert'

@Injectable()
export class MainInterceptor implements HttpInterceptor {
	constructor() {}

	intercept<T>(
		request: HttpRequest<T>,
		next: HttpHandler
	): Observable<HttpEvent<T>> {
		return next.handle(request).pipe(catchError(this.errorMessage))
	}

	errorMessage(response: HttpErrorResponse) {
		if (response.status == 404) {
			Alert(
				'HTTP Error',
				`The requested URL was ${response.statusText}`,
				'error'
			)
		}
		if (response.status == 401) {
			Alert(
				'HTTP Error',
				`You are account was not authenticated`,
				'error'
			)
		}
		if (response.status == 500) {
			Alert(
				'HTTP Error',
				`Internal Server Error Contact Developers`,
				'error'
			)
		}
		for (let message in response.error.errors) {
			Alert(
				`Error!`,
				JSON.stringify(response.error.errors[message]),
				'error'
			)
			break
		}
		return throwError(response)
	}
}
