export function createFormData(file) {
	const formData = new FormData();
	formData.append('files', file);

	return formData;
}
