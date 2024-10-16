// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ["class"],
//   content: [
//     './pages/**/*.{js,jsx}',
//     './components/**/*.{js,jsx}',
//     './app/**/*.{js,jsx}',
//     './src/**/*.{js,jsx}',
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       fontFamily: {
//         greatVibes: ['"Great Vibes"', 'cursive'],
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//       colors: {
//         cyan: {
//           500: '#00BFFF', // Adjust based on your design
//         },
//         emerald: {
//           500: '#50C878', // Adjust based on your design
//         },
//         orange: {
//           500: '#FFA500',
//         },
//         yellow: {
//           500: '#FFFF00',
//         },
//       },
//       boxShadow: {
//         '4xl': '0 10px 30px rgba(0, 0, 0, 0.5)', // Add custom shadow class
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate"), addVariablesForColors],
// };

// // This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
// function addVariablesForColors({ addBase, theme }) {
//   const allColors = theme("colors");
//   const newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

// Define the function first
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx,ts,tsx}', // Combined content sources
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      fontFamily: {
        greatVibes: ['"Great Vibes"', 'cursive'],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      colors: {
        cyan: {
          500: '#00BFFF',
        },
        emerald: {
          500: '#50C878',
        },
        orange: {
          500: '#FFA500',
        },
        yellow: {
          500: '#FFFF00',
        },
      },
      boxShadow: {
        '4xl': '0 10px 30px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors, // Use the plugin here after defining it
  ],
};
