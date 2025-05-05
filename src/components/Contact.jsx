import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mvgakdvn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage({ type: "success", text: "Message sent!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      setSubmitMessage({ type: "error", text: "Error sending message." });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(null), 5000);
    }
  };
  return (
    <section id="contact" className="py-20 bg-[#0a1324]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center text-white">
          Contact
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-[#111a2e] p-8 rounded-lg border border-[#1e293b]">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Get In Touch
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1 text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#0a1324] border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#0a1324] border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1 text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#0a1324] border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                ></textarea>
              </div>

              {submitMessage && (
                <div
                  className={`mb-4 p-3 rounded-md ${
                    submitMessage.type === "success"
                      ? "bg-green-500/20 text-green-200"
                      : "bg-red-500/20 text-red-200"
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail size={24} className="mr-4 text-blue-400" />
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a href='mailto:karamarandas03@gmail.com' className="link link-primary">karamarandas03@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin size={24} className="mr-4 text-blue-400" />
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-400">Amman, Jordan</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone size={24} className="mr-4 text-blue-400" />
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="text-gray-400">(+962) 796414772</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Let's Work Together
              </h3>
              <p className="text-gray-400 mb-4">
                I'm currently available for freelance work. If you have a
                project that needs some creative energy, feel free to reach out
                and we can discuss the details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
