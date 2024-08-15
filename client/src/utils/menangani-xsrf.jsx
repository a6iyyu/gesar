import axios, { isAxiosError } from "axios";

export const MenanganiXSRF = async (route, setXSRFToken) => {
  try {
		const response = await axios.get(`http://localhost:4001/${route}`, { withCredentials: true });
		setXSRFToken(response.data["XSRF-Token"]);
  } catch (e) {
		if (isAxiosError(e) && e.response) console.error(e.response.data.message);
	}
};