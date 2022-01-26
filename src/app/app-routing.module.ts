import { PageNotFoundComponent } from './screens/app-redirects/page-not-found/page-not-found.component'
import { UnderMaintenanceComponent } from './screens/app-redirects/under-maintenance/under-maintenance.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductDetailsComponent } from './screens/product-details/product-details.component'
import { StripeCancelPageComponent } from './screens/stripe/stripe-cancel-page/stripe-cancel-page.component'
import { StripeRefreshPageComponent } from './screens/stripe/stripe-refresh-page/stripe-refresh-page.component'
import { StripeSuccessPageComponent } from './screens/stripe/stripe-success-page/stripe-success-page.component'
import { AcceptedPageComponent } from './screens/accepted-page/accepted-page.component'

const routes: Routes = [
	{
		path: '',
		component: PageNotFoundComponent
	},
	{
		path: 'product-details/:id',
		component: ProductDetailsComponent
	},
	{
		path: 'order-has-been-accepted',
		component: AcceptedPageComponent
	},
	{
		path: 'onboard',
		component: StripeRefreshPageComponent
	},
	{
		path: 'onboarding-needed/:amount/:user',
		component: StripeCancelPageComponent
	},
	{
		path: 'onboarding-success',
		component: StripeSuccessPageComponent
	},
	{
		path: 'site-under-maintenance',
		component: UnderMaintenanceComponent
	},
	{
		path: '***',
		component: PageNotFoundComponent
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
