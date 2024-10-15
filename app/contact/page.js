// // app/contact/page.js
// // import { FaInstagram, FaEnvelope } from 'react-icons/fa';

// // export default function Contact() {
// //   return (
// //     <div className="flex flex-col items-center p-8">
// //       <h1 className="text-3xl font-bold mb-4">Contact</h1>
// //       <p className="mb-4">Get in touch!</p>
// //       <div className="flex space-x-4">
// //         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neon-blue">
// //           <FaInstagram size={30} />
// //         </a>
// //         <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="text-neon-blue">
// //           <FaEnvelope size={30} />
// //         </a>
// //       </div>
// //     </div>
// //   );
// // }

// 'use client';
// import { FaInstagram, FaEnvelope } from 'react-icons/fa';
// import { useState } from 'react';

// export default function Contact() {
//   const [name, setName] = useState('');
//   const [contact, setContact] = useState('');
//   const [eventDate, setEventDate] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle sending the email.
//     console.log("Form submitted:", { name, contact, eventDate });
//     // You can add functionality to send this data to your email or an API.
//   };

//   return (
//     <div className="flex flex-col items-center p-8">
//       <h1 className="text-3xl font-bold mb-4">Contact</h1>
//       <p className="mb-4">Get in touch!</p>
//       <div className="flex space-x-4 mb-4">
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neon-blue">
//           <FaInstagram size={30} />
//         </a>
//         <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="text-neon-blue">
//           <FaEnvelope size={30} />
//         </a>
//       </div>
//       <form onSubmit={handleSubmit} className="w-full max-w-md">
//         <div className="mb-4">
//           <label className="block text-sm font-bold mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             id="name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Your Name"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-bold mb-2" htmlFor="contact">
//             Contact Number
//           </label>
//           <input
//             id="contact"
//             type="tel"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             required
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Your Contact Number"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-bold mb-2" htmlFor="eventDate">
//             Event Date
//           </label>
//           <input
//             id="eventDate"
//             type="date"
//             value={eventDate}
//             onChange={(e) => setEventDate(e.target.value)}
//             required
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-neon-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Schedule
//         </button>
//       </form>
//     </div>
//   );
// }

// 'use client';
// import { FaInstagram, FaEnvelope } from 'react-icons/fa';
// import { useState } from 'react';
// import { useTheme } from '../../context/ThemeContext'; // Import the theme context

// export default function Contact() {
//   const [name, setName] = useState('');
//   const [contact, setContact] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const { theme } = useTheme(); // Get the current theme

//   const BackgroundWrapper = ({ children }) => {
//     return (
//       <div className={`bg-cover bg-no-repeat ${theme === 'dark' ? 'bg-[url(/images/DarkDslr.jpg)]' : 'bg-[url(/images/LightDslr.jpg)]'}`}>
//         {children}
//       </div>
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", { name, contact, eventDate });
//   };

//   return (
//     <BackgroundWrapper> {/* Wrap main content in BackgroundWrapper */}
//       <div className="flex flex-col items-start p-8"> {/* Updated items-center to items-start */}
//         <h1 className="text-3xl font-bold mb-4">Contact</h1>
//         <p className="mb-2">Malik +91 82977 60804</p>
//         <p className="mb-2">Get in touch!</p>
//         <div className="flex space-x-4 mb-4">
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neon-blue">
//             <FaInstagram size={30} />
//           </a>
//         </div>
//         <form onSubmit={handleSubmit} className="w-full max-w-md">
//           <div className="mb-4">
//             <label className="block text-sm font-bold mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Your Name"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-bold mb-2" htmlFor="contact">
//               Contact Number
//             </label>
//             <input
//               id="contact"
//               type="tel"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Your Contact Number"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-bold mb-2" htmlFor="eventDate">
//               Event Date
//             </label>
//             <input
//               id="eventDate"
//               type="date"
//               value={eventDate}
//               onChange={(e) => setEventDate(e.target.value)}
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <button
//             type="submit"
//             className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold ${theme === 'dark' ? 'bg-white text-black hover:bg-sky-800' : 'bg-gray-800 text-white hover:bg-sky-800'}`}
//           >
//             Schedule
//           </button>
//         </form>
//       </div>
//     </BackgroundWrapper>
//   );
// }


'use client';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext'; // Import the theme context

export default function Contact() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [eventDate, setEventDate] = useState('');
  const { theme } = useTheme(); // Get the current theme

  const BackgroundWrapper = ({ children }) => {
    return (
      <div className={`bg-cover bg-no-repeat ${theme === 'dark' ? 'bg-[url(/images/DarkDslr.jpg)]' : 'bg-[url(/images/LightDslr.jpg)]'}`}>
        {children}
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, contact, eventDate }),
    });

    if (response.ok) {
      console.log("Email sent successfully!");
      // Optionally reset the form or show a success message
      setName('');
      setContact('');
      setEventDate('');
    } else {
      console.error("Failed to send email.");
      // Show an error message
    }
  };

  return (
    <BackgroundWrapper> {/* Wrap main content in BackgroundWrapper */}
      <div className="flex flex-col items-start p-8"> {/* Updated items-center to items-start */}
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="mb-2">Malik +91 82977 60804</p>
        <p className="mb-2">Get in touch!</p>
        <div className="flex space-x-4 mb-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neon-blue">
            <FaInstagram size={30} />
          </a>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="contact">
              Contact Number
            </label>
            <input
              id="contact"
              type="tel"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Contact Number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="eventDate">
              Event Date
            </label>
            <input
              id="eventDate"
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold ${theme === 'dark' ? 'bg-white text-black hover:bg-sky-800' : 'bg-gray-800 text-white hover:bg-sky-800'}`}
          >
            Schedule
          </button>
        </form>
      </div>
    </BackgroundWrapper>
  );
}
