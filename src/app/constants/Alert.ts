import Swal from 'sweetalert2'

export function Fire(
	title: string,
	text: string,
	type: any,
	callback: Function
) {
	Swal.fire({
		title: title,
		text: text,
		icon: type,
		showCancelButton: true,
		confirmButtonText: 'Yes',
		cancelButtonText: 'Cancel'
	}).then((result: any) => {
		if (result.value) {
			return callback()
		}
	})
}

export function Alert(title: string, text: string, type: any) {
	Swal.fire(title, text, type)
}
