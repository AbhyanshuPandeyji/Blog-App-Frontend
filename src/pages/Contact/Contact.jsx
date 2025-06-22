import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='text-4xl p-10 bg-gray-300 font-semibold text-center'>Contact</div>
      {/* <h2>Contact Us</h2> */}
      <div className="contact flex flex-row justify-center h-screen">
        <p className='w-[50%] flex justify-center items-center bg-blue-300 gap-x-4 text-2xl font-semibold'>
          Email: <a href="mailto:abhyanshupandeyji@gmail.com" className='italic '>abhyanshupandeyji@gmail.com</a>
        </p>
        <p className='w-[50%] flex justify-center items-center bg-slate-400 gap-x-4 text-2xl font-semibold'>
          Phone: <a href="tel:+919910247739" className='italic '>+91 9910247739</a>
        </p>
      </div>
    </>
  )
}

export default Contact;


// export function ContactForm() {
//   const [formData, setFormData] = useState({
//     email: '',
//     phone: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // handle sending data somewhere
//     console.log('Submitted:', formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </label>

//       <label>Phone:
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//         />
//       </label>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }