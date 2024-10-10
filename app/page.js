// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="https://nextjs.org/icons/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               app/page.js
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="https://nextjs.org/icons/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
// app/page.js

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-4xl font-bold text-neon-blue">Welcome to Memorable Stories by Malik</h1>
//       <p className="text-lg mt-4">Give soul to image</p>
//     </div>
//   );
// }
// app/page.js

// 'use client';
// import { TypeAnimation } from 'react-type-animation';

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <TypeAnimation
//         className="text-5xl font-bold text-neon-blue" // Increased font size from 'text-4xl' to 'text-5xl'
//         sequence={[
//           'Welcome to Memorable Stories by Malik', // Text to be typed
//           2000, // Pause for 2 seconds

//           () => {
//             // Place optional callbacks anywhere in the sequence
//             console.log('Animation done');
//           },
//         ]}
//         wrapper="h1" // Wrapper element (optional)
//         speed={50} // Typing speed in milliseconds
//         style={{ fontSize: '3em' }} // Additional styling (optional)
//         repeat={Infinity} // Repeat the sequence infinitely
//       />
//       <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <circle cx="50" cy="50" r="40" stroke="#00FFFF" stroke-width="3" />
//   <circle cx="50" cy="50" r="30" stroke="#00FFFF" stroke-width="2" />
//   <circle cx="50" cy="50" r="20" stroke="#00FFFF" stroke-width="2" />
// </svg>

//       <p className="text-lg mt-4">Give soul to image</p>
//     </div>
//   );
// }

// 'use client';
// import { TypeAnimation } from 'react-type-animation';

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <TypeAnimation
//         className="text-5xl font-bold text-neon-blue"
//         sequence={[
//           'Welcome to Memorable Stories by Malik', // Text to be typed
//           2000, // Pause for 2 seconds
//           () => {
//             console.log('Animation done');
//           },
//         ]}
//         wrapper="h1"
//         speed={50}
//         style={{ fontSize: '3em' }}
//         repeat={Infinity}
//       />

//       {/* Camera SVG with neon light effect */}
//       <svg
//         width="200"
//         height="200"
//         viewBox="0 0 200 200"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         style={{ opacity: 0.5 }}
//       >
//         {/* Camera body */}
//         <rect
//           x="30"
//           y="60"
//           width="140"
//           height="100"
//           rx="15"
//           ry="15"
//           stroke="#00FFFF"
//           strokeWidth="4"
//           fill="none"
//           style={{ filter: 'drop-shadow(0 0 10px #00FFFF)' }}
//         />

//         {/* Lens */}
//         <circle
//           cx="100"
//           cy="110"
//           r="30"
//           stroke="#00FFFF"
//           strokeWidth="4"
//           fill="none"
//           style={{ filter: 'drop-shadow(0 0 10px #00FFFF)' }}
//         />

//         {/* Inner lens ring */}
//         <circle
//           cx="100"
//           cy="110"
//           r="15"
//           stroke="#00FFFF"
//           strokeWidth="2"
//           fill="none"
//           style={{ filter: 'drop-shadow(0 0 5px #00FFFF)' }}
//         />

//         {/* Flash */}
//         <rect
//           x="130"
//           y="50"
//           width="20"
//           height="10"
//           stroke="#00FFFF"
//           strokeWidth="2"
//           fill="none"
//           style={{ filter: 'drop-shadow(0 0 5px #00FFFF)' }}
//         />

//         {/* Shutter button */}
//         <circle
//           cx="60"
//           cy="50"
//           r="5"
//           stroke="#00FFFF"
//           strokeWidth="2"
//           fill="none"
//           style={{ filter: 'drop-shadow(0 0 5px #00FFFF)' }}
//         />
//       </svg>

//       <p className="text-lg mt-4">Give soul to image</p>
//     </div>
//   );
// }

// 'use client';
// import { TypeAnimation } from 'react-type-animation';

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen relative">
//       <TypeAnimation
//         className="text-5xl font-bold text-neon-blue"
//         sequence={[
//           'Welcome to Memorable Stories by Malik', // Text to be typed
//           2000, // Pause for 2 seconds
//           () => {
//             console.log('Animation done');
//           },
//         ]}
//         wrapper="h1"
//         speed={50}
//         style={{ fontSize: '3em' }}
//         repeat={Infinity}
//       />

//       {/* SVG as a background */}
//       <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
//         <svg
//           width="90%" // Increased to 90%
//           height="90%" // Increased to 90%
//           viewBox="0 0 200 200"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{ opacity: 0.1 }} // Low opacity for background effect
//         >
//           {/* Camera body */}
//           <rect
//             x="30"
//             y="60"
//             width="140"
//             height="100"
//             rx="15"
//             ry="15"
//             stroke="#00FFFF"
//             strokeWidth="4"
//             fill="none"
//             style={{ filter: 'drop-shadow(0 0 10px #00FFFF)' }}
//           />

//           {/* Lens */}
//           <circle
//             cx="100"
//             cy="110"
//             r="30"
//             stroke="#00FFFF"
//             strokeWidth="4"
//             fill="none"
//             style={{ filter: 'drop-shadow(0 0 10px #00FFFF)' }}
//           />

//           {/* Inner lens ring */}
//           <circle
//             cx="100"
//             cy="110"
//             r="15"
//             stroke="#00FFFF"
//             strokeWidth="2"
//             fill="none"
//             style={{ filter: 'drop-shadow(0 0 5px #00FFFF)' }}
//           />

//           {/* Flash */}
//           <rect
//             x="130"
//             y="50"
//             width="20"
//             height="10"
//             stroke="#00FFFF"
//             strokeWidth="2"
//             fill="none"
//             style={{ filter: 'drop-shadow(0 0 5px #00FFFF)' }}
//           />

//           {/* Shutter button */}
//           <circle
//             cx="60"
//             cy="50"
//             r="5"
//             stroke="#00FFFF"
//             strokeWidth="2"
//             fill="none"
//             style={{ filter: 'drop-shadow(0 0 5px #00FFFF)' }}
//           />
//         </svg>
//       </div>

//       <p className="text-lg mt-4">Give soul to image</p>
//     </div>
//   );
// }

// 'use client';
// import { TypeAnimation } from 'react-type-animation';

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen relative">
//       <TypeAnimation
//         className="text-5xl font-bold text-neon-blue"
//         sequence={[
//           'Welcome to Memorable Stories by Malik', // Text to be typed
//           2000, // Pause for 2 seconds
//           () => {
//             console.log('Animation done');
//           },
//         ]}
//         wrapper="h1"
//         speed={50}
//         style={{ fontSize: '3em' }}
//         repeat={Infinity}
//       />

//       {/* Background effect removed */}
//       <p className="text-lg mt-4">Give soul to image</p>
//     </div>
//   );
// }
import Home from '@/components/Home'
import React from 'react'

const page = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default page