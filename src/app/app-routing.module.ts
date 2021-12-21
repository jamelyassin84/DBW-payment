import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AcceptedPageComponent } from './screens/accepted-page/accepted-page.component'
import { ConfirmPaymentComponent } from './screens/confirm-payment/confirm-payment.component'
import { PaymentDetailsComponent } from './screens/payment-details/payment-details.component'
import { ProductDetailsComponent } from './screens/product-details/product-details.component'

const routes: Routes = [
	{
		path: '',
		redirectTo: 'product-details/1',
		pathMatch: 'full'
	},
	{
		path: 'product-details/:id',
		component: ProductDetailsComponent
	},
	{
		path: 'payment-details',
		component: PaymentDetailsComponent
	},
	{
		path: 'confirm-payment',
		component: ConfirmPaymentComponent
	},
	{
		path: 'order-has-been-accepted',
		component: AcceptedPageComponent
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
