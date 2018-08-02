import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const STORE_ROUTER_KEY = '__router__';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		CounterModule,
		RouterModule.forRoot([
			{
				path: '',
				component: HomeComponent
			},
			{
				path: '**',
				component: NotFoundComponent
			},
		]),
		StoreModule.forRoot({ [STORE_ROUTER_KEY]: routerReducer }),
		StoreDevtoolsModule.instrument(),
		StoreRouterConnectingModule.forRoot({
			stateKey: STORE_ROUTER_KEY, // name of reducer key
		}),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
