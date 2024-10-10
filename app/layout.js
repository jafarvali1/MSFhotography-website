// import localFont from "next/font/local";
// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
// app/layout.js

// 'use client'
// import '../styles/globals.css';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-900 text-white">
//         <Header />
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

// 'use client';
// import '../styles/globals.css';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { ThemeProvider } from '../ThemeContext'; // Import the ThemeProvider

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-900 text-white">
//         <ThemeProvider> {/* Wrap children with ThemeProvider */}
//           <Header />
//           <main className="min-h-screen">{children}</main>
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

// layout.js
// 'use client';
// import '../styles/globals.css';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { ThemeProvider } from '../context/ThemeContext'; // Updated import path

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link 
//           href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" 
//           rel="stylesheet" 
//         />
//       </head>
//       <body>
//         <ThemeProvider>
//           <Header />
//           <main className="min-h-screen">{children}</main>
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
'use client';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider, useTheme } from '../context/ThemeContext'; // Import useTheme


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {/* <BackgroundWrapper> Wrap main content in BackgroundWrapper */}
            <main className="min-h-screen">{children}</main>
          {/* </BackgroundWrapper> */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
