import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname:'',
    email: '',
    title: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();

    const apiUrl = "https://geofosu.jesseanim.site/email_api.php"
     
   fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(formData)
   })
   .then((response) => {
         console.log('Response from server:', response)
        return response.json()
      })
      .then((data) => {
        console.log('Form sent successfully:', data);
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });

      setFormData({
        firstname: '',
        lastname: "",
        email: '',
        title: '',
        message: '',
      });

       // Track the form submission as a Google Analytics event
      ReactGA.event({
        category: 'Form',
        action: 'Submit',
        label: 'Enquiry Form',
      });
    }
 
  

  return (
    <div className="min-h-screen flex flex-col items-center gap-4 justify-center bg-gray-100">
      {formSubmitted ? (
          <h2 className="text-xl sm:text-2xl font-bold text-black/80 mb-4 text-center">
            Form submitted successfully!
          </h2>
      ) : ""}

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
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last name"
            value={formData.lastname}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded border border-gray-300 outline-none"
            required
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
            required
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
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded border border-gray-300 outline-none"
            required
            rows="4"
          ></textarea>
        </div>
        <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue text-white font-semibold py-2 px-6 rounded-md border border-transparent hover:bg-white hover:border-blue hover:text-blue transition-all"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;
