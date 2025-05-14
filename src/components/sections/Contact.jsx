import emailjs from "emailjs-com";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        alert("Failed to send message. Please try again later.");
        console.error("Error sending message: ", error.text);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="px-4 w-full max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Get in Touch
        </h2>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4 mb-8">
          {/* GitHub */}
          <a
            href="https://github.com/Apitpr0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-cyan-400 text-3xl transition duration-300"
          >
            <i className="fab fa-github"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/afiqmuhaimin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-cyan-400 text-3xl transition duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/601162674383" // Replace with your real WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-green-400 text-3xl transition duration-300"
          >
            <i className="fab fa-whatsapp"></i>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/Apitpro" // Replace with your real Telegram username
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-blue-500 text-3xl transition duration-300"
          >
            <i className="fab fa-telegram-plane"></i>
          </a>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-foreground text-xl transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-foreground text-xl transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Email Address"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="relative">
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-foreground text-xl transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Your Message"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-foreground px-6 py-3 rounded font-medium transition relative cursor-pointer overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
