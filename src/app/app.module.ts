import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AcceptedPageComponent } from './screens/accepted-page/accepted-page.component'
import { ConfirmPaymentComponent } from './screens/confirm-payment/confirm-payment.component'
import { PaymentDetailsComponent } from './screens/payment-details/payment-details.component'
import { ProductDetailsComponent } from './screens/product-details/product-details.component'

@NgModule({
	declarations: [
		AppComponent,
		ProductDetailsComponent,
		PaymentDetailsComponent,
		ConfirmPaymentComponent,
		AcceptedPageComponent
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
