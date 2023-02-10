export function createFormData(file) {
	const formData = new FormData();
	formData.append('files', file);

	return formData;
}

export function validate(form) {
	console.log(form.fileTrekName);
	if (
		form.ascent &&
		form.bikeType &&
		form.cardPhoto?.source &&
		form.descPhotos.length &&
		form.descriptionArea &&
		form.distance &&
		form.fileTrekName &&
		form.finish &&
		form.name &&
		form.start &&
		form.state &&
		form.turn &&
		form.urlTrekGConnect
	)
		return true;
	return false;
}
