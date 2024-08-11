export const MenanganiPerubahanFormulir = (e, setFormData, formData) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};