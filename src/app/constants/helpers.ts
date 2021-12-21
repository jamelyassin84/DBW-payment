export function sentincify(slug: string | any): string {
	const text = slug.split('-').join(' ')
	return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
}
