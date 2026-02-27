import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Download,
} from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully ✅");
        form.current.reset();
      })
      .catch(() => {
        setStatus("Failed to send message ❌");
      });
  };

  return (
    <section
      id="contact"
      className="relative bg-black py-15 text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full -translate-x-1/2 -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Let's Work Together
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            I'm a fresher actively looking for opportunities. Feel free to
            reach out for collaborations or job opportunities.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE - FORM */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-lg hover:shadow-green-500/20 transition duration-500">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              
              <div>
                <label className="block mb-2 text-sm text-white/70">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full p-4 rounded-xl bg-black border border-white/10 focus:border-green-500 focus:shadow-lg focus:shadow-green-500/20 outline-none transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-white/70">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full p-4 rounded-xl bg-black border border-white/10 focus:border-green-500 focus:shadow-lg focus:shadow-green-500/20 outline-none transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-white/70">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about the opportunity..."
                  className="w-full p-4 rounded-xl bg-black border border-white/10 focus:border-green-500 focus:shadow-lg focus:shadow-green-500/20 outline-none transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-400 text-black font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-green-500/20"
              >
                Send Message
              </button>

              {status && (
                <p className="text-center text-sm mt-4 text-white/70">
                  {status}
                </p>
              )}

              {/* Resume Download Button */}
              <div className="pt-4 border-t border-white/10 mt-6">
                <a
                  href="/resume.pdf"
                  download
                  className="w-full flex items-center justify-center gap-2 
                  py-4 rounded-xl border border-green-500 text-green-400
                 hover:bg-green-500 hover:text-black 
                  transition duration-300 font-medium"
                >
                  <Download size={18} />
                    Download Resume 
                </a>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE - CONTACT INFO */}
          <div className="space-y-8">
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="text-white/60">
                I'm open to internships, full-time roles, and freelance
                opportunities. Let's connect and build something amazing.
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition duration-300">
              <div className="bg-green-500/20 p-4 rounded-xl">
                <Mail className="text-green-400" />
              </div>
              <div>
                <p className="text-sm text-white/60">Email</p>
                <p className="font-medium">rohithar0411@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition duration-300">
              <div className="bg-green-500/20 p-4 rounded-xl">
                <Phone className="text-green-400" />
              </div>
              <div>
                <p className="text-sm text-white/60">Phone</p>
                <p className="font-medium">+91 9629903379</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition duration-300">
              <div className="bg-green-500/20 p-4 rounded-xl">
                <MapPin className="text-green-400" />
              </div>
              <div>
                <p className="text-sm text-white/60">Location</p>
                <p className="font-medium">Karur, Tamil Nadu, India</p>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-white/60 mb-4">Follow Me</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Rohith0411"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/20 transition"
                >
                  <Github />
                </a>

                <a
                  href="https://www.linkedin.com/in/rohith-a-6a254120a/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/20 transition"
                >
                  <Linkedin />
                </a>

                <a
                  href="https://x.com/RohithAr04"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/20 transition"
                >
                  <Twitter />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
