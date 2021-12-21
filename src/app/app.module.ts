import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AcceptedPageComponent } from './screens/accepted-page/accepted-page.component'
import { ConfirmPaymentComponent } from './screens/confirm-payment/confirm-payment.component'
import { PaymentDetailsComponent } from './screens/payment-details/payment-details.component'
import { ProductDetailsComponent } from './screens/product-details/product-details.component'
import { ButtonComponent } from './components/button/button.component'
import { CarouselComponent } from './components/carousel/carousel.component'
import { ColorsComponent } from './components/colors/colors.component'
import { PaymentMethodComponent } from './components/payment-method/payment-method.component'
import { ProductComponent } from './components/product/product.component'
import { SizesComponent } from './components/sizes/sizes.component'
import { DotsComponent } from './components/dots/dots.component'
import { VariantsComponent } from './components/variants/variants.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
	declarations: [
		AppComponent,
		ProductDetailsComponent,
		PaymentDetailsComponent,
		ConfirmPaymentComponent,
		AcceptedPageComponent,
		ButtonComponent,
		CarouselComponent,
		ColorsComponent,
		PaymentMethodComponent,
		ProductComponent,
		SizesComponent,
		DotsComponent,
		VariantsComponent
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
