import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DECREMENT, INCREMENT, RESET } from '../reducers/counter.reducer';

interface AppState {
	count: number;
}

@Component({
	selector: 'app-counter',
	template: `
		<div>Current Count: {{ count$ | async }}</div>
		<div>
			<button (click)="increment()">Increment</button>
			<button (click)="decrement()">Decrement</button>
		</div>
		<div>
			<button (click)="reset()">Reset Counter</button>

		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
	count$: Observable<number>;

	constructor(private store: Store<AppState>) {
		this.count$ = store.pipe(select('counter', 'state'));
		store.subscribe((...args) => console.log('store', ...args));
	}

	increment() {
		this.store.dispatch({ type: INCREMENT });
	}

	decrement() {
		this.store.dispatch({ type: DECREMENT });
	}

	reset() {
		this.store.dispatch({ type: RESET });
	}
}
