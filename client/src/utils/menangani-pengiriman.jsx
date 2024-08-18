import axios, { isAxiosError } from "axios";
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

export const MenanganiPengiriman = async (
  e,
  skema,
  formData,
  setErrorForm,
  POSTRoute,
  GETRoute,
  setShowNotification,
) => {
  e.preventDefault();

  const GagalValidasi = ValidasiFormulir(skema, formData);
  if (GagalValidasi) return setErrorForm(GagalValidasi);

  try {
    const response = await axios.post(`http://localhost:4001/${POSTRoute}`, formData, {
			headers: { "Content-Type": "application/json" },
			withCredentials: true,
    });

    response.status === 201 || response.status === 200 ? (window.Location.href = `http://localhost:2000/${GETRoute}`) : setShowNotification && setShowNotification({ showMessage: response.data.message || "Terjadi kesalahan!", isVisible: true });
  } catch (e) {
    if (isAxiosError(e) && e.response) setShowNotification && setShowNotification({ showMessage: e.response.data.message || "Terjadi kesalahan!", isVisible: true });
  }
};

export const MenanganiKritikSaran = async (e, skema, formData, setErrorForm, setShowNotification, resetForm) => {
	e.preventDefault();

	const GagalValidasi = ValidasiFormulir(skema, formData);
	if (GagalValidasi) return setErrorForm(GagalValidasi);

	try {
		const response = await axios.post("http://localhost:4001/kritik-dan-saran", formData, {
			headers: { "Content-Type": "application/json" },
			withCredentials: true,
		});

		response.status === 200 ? resetForm() : setShowNotification({ showMessage: response.data.message || "Terjadi kesalahan!", isVisible: true });
	} catch (e) {
		if (isAxiosError(e) && e.response) setShowNotification && setShowNotification({ showMessage: e.response.data.message || "Terjadi kesalahan!", isVisible: true });
	}
};