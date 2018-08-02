import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature('counter', {
			state: counterReducer
		})
	],
	declarations: [CounterComponent],
	exports: [CounterComponent]
})
export class CounterModule {
}
