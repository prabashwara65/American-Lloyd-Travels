"use client";

import { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Submitted:", formData);
  };

  return (
    <main className="w-full flex-grow bg-white text-slate-700">
      {/* Header Banner */}
      <section className="bg-[#4865b2] py-6 px-6 sm:px-10 lg:px-16 shadow-inner">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold tracking-wide text-white">
            How to Contact Us
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-10 lg:px-16">
        {/* Added px-3 (12px padding left/right) */}
        <div className="px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Left Column: Information */}
            <div className="space-y-6 text-xs sm:text-sm text-slate-500 leading-relaxed">
              <p className="text-base sm:text-lg font-bold text-[#35487a] leading-normal">
                If you have any questions or complaints about our services, please contact us by filling out the form below and we will get in touch with you shortly. Alternatively, you can give us a call or even drop by and visit us – we hope to see you soon!
              </p>

              <div>
                <p className="font-bold text-slate-700 mb-1">Address :</p>
                <p>American Lloyd Travels Ltd</p>
                <p>No 8-1/3,</p>
                <p>York Arcade Building,</p>
                <p>Leyden Bastian Road,</p>
                <p>Colombo 01.</p>
                <p>Sri Lanka</p>
              </div>

              <div className="space-y-1">
                <p>
                  <strong className="font-bold text-slate-700">24/7 Hotline:</strong>{" "}
                  +94 720170022
                </p>
                <p>
                  <strong className="font-bold text-slate-700">Telephone:</strong>{" "}
                  +94 112345790 / +94 112344398
                </p>
                <p className="font-bold text-slate-700 pt-1">E-mail:</p>
                <p>
                  <a
                    href="mailto:info@americanlloydtravels.com"
                    className="text-slate-600 hover:underline"
                  >
                    info@americanlloydtravels.com
                  </a>{" "}
                  or{" "}
                  <a
                    href="mailto:amlloyd@sltnet.lk"
                    className="text-slate-600 hover:underline"
                  >
                    amlloyd@sltnet.lk
                  </a>
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#35487a] mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-slate-500 mb-1"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-sm border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-[#4865b2] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-slate-500 mb-1"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-sm border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-[#4865b2] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs text-slate-500 mb-1"
                  >
                    Phone:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-[#4865b2] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs text-slate-500 mb-1"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-sm border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-[#4865b2] focus:outline-none resize-y"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="rounded-full border-2 border-[#4865b2] px-8 py-1.5 text-sm font-semibold text-[#4865b2] transition-colors hover:bg-[#4865b2] hover:text-white focus:outline-none"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full h-[320px] rounded-md overflow-hidden border border-slate-200">
            <iframe
              title="American Lloyd Travels Location"
              src="https://maps.google.com/maps?q=American%20Lloyd%20Travels%20Colombo&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}