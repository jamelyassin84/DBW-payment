import {
	trigger,
	transition,
	style,
	animate,
	query,
	stagger
} from '@angular/animations'

export const listAnimation = trigger('listAnimation', [
	transition('* <=> *', [
		query(
			':enter',
			[
				style({
					transform: 'translateX(50px) scale(2.5)',
					opacity: 0,
					boxShadow: '-5px 5px 115px rgba(150,150,150,.6)'
				}),
				stagger(
					'160ms',
					animate(
						'150ms ease-out',
						style({
							transform: 'translateY(0px) scale(1)',
							opacity: 1,
							boxShadow: '0px 0px 5px rgba(150,150,150,.3)'
						})
					)
				)
			],
			{ optional: true }
		),
		query(':leave', animate('200ms', style({ opacity: 0 })), {
			optional: true
		})
	])
])
