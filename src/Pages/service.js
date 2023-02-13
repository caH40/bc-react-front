export const resetFormProfile = {
	phone: '',
	firstName: '',
	patronymic: '',
	lastName: '',
	gender: '',
	birthday: '',
	city: '',
	team: '',
	email: '',
	photoProfile: '',
};

export function checkUserForm(form) {
	try {
		if (!form.firstName || !form.lastName || !form.gender || !form.birthday) return false;
		return true;
	} catch (error) {
		throw error;
	}
}
