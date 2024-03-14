import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert(
        "Por favor, complete todos los campos antes de enviar el formulario."
      );
      return;
    }

    // Si todos los campos están llenos, puedes enviar el formulario a través del atributo "action"
    const form = e.target;
    form.submit();

    // Restablecer el estado del mensaje después del envío
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      name="contact"
      className="w-full md:h-[800px] h-[120vh] bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/4081f3f8-54e6-4bee-85c7-566179622e2f"
        className="flex flex-col max-w-[600px] w-full"
        onSubmit={handleSubmit}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contacto
          </p>
          <p className="text-gray-300 py-4">
            Envía el formulario a continuación o mándame un correo electrónico a
            -{" "}
            <span className="text-primary text-pink-600 cursor-pointer transition duration-300 hover:text-green-400">
              1678federico@gmail.com
            </span>
            .
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button className="text-white hover:text-black border-2 hover:bg-pink-600 border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Contacto
        </button>
      </form>
    </div>
  );
};

export default Contact;
