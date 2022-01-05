export function sentincify(slug: string | any): string {
	const text = slug.split('-').join(' ')
	return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
}
export function groupByKey(data: Array<any>, property: string) {
	if (data.length > 0 && !(property in data[0])) {
		throw new Error(`${property} does not exist in array.`)
	}
	const temp: any = {}
	data.forEach((item: any) => {
		const key = item[property]
		if (!(key in temp)) {
			temp[key] = []
		}
		temp[key].push(item)
	})
	return Object.keys(temp).map((key) => temp[key])
}
