import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname:'',
    email: '',
    title: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted: ', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit}  data-aos="zoom-in"
       className="max-w-2xl w-full p-6 bg-white rounded shadow-md mx-4 sm:mx-auto">
        <h1 className="text-2xl font-bold text-center text-black/80 mb-4">Get in touch</h1>
        <div className="mb-4 flex gap-4 flex-col md:flex-row">
          <input
            type="text"
            name="firstname"
            placeholder="First name"
            value={formData.firstname}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded border border-gray-300 outline-none"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last name"
            value={formData.lastname}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded border border-gray-300 outline-none"
          />
        </div>
        
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded border border-gray-300 outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded border border-gray-300 outline-none"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded border border-gray-300 outline-none"
            rows="4"
          ></textarea>
        </div>
        <div class="flex justify-center">
        <button
          type="submit"
          className="bg-blue text-white font-semibold py-2 px-6 rounded-md border border-transparent hover:bg-white hover:border-blue hover:text-blue transition-all"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
