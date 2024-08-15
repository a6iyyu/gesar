import axios from "axios";
import { ZodError } from "zod";

const ValidasiFormulir = (skema, formData) => {
	try {
		skema.parse(formData);
		return null;
	} catch (e) {
		if (e instanceof ZodError) {
			const InvalidSchema = {};
			e.errors.forEach(err => err.path.length && (InvalidSchema[err.path[0]] = err.message));
			return InvalidSchema;
		}
	}
};

export const MenanganiPengiriman = async (e, skema, formData, setErrorForm, POSTRoute, GETRoute, XSRFToken, setShowNotification) => {
	e.preventDefault();

	const GagalValidasi = ValidasiFormulir(skema, formData);
	if (GagalValidasi) return setErrorForm(GagalValidasi);

	try {
		const response = await axios.post(`http://localhost:4001/${POSTRoute}`, formData, {
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
				"XSRF-Token": XSRFToken,
			},
		});

		response.status === 201 || response.status === 200 ? window.Location.href = `http://localhost:2000/${GETRoute}` : (setShowNotification && setShowNotification({ showMessage: response.data.message, isVisible: true }));
	} catch (e) {
		if (isAxiosError(e) && e.response) setShowNotification && setShowNotification({ showMessage: e.response.data.message, isVisible: true });	
	}
};