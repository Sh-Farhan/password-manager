// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       extend: {
//         colors: {
//           'custom-yellow':'#BAA333',
//         }
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-yellow-gradient': 'linear-gradient(109.6deg, rgb(253, 140, 117) 19.9%, rgb(225, 252, 117) 90.7%);',
      },
    },
  },
  plugins: [],
}
