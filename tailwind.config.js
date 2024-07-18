/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Tambahkan path ke file HTML proyek Anda jika perlu
    "../path/to/your/html/files/*.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#A8151C',
        'dark': '#640D11'
      },
    },
  },
  plugins: [],
}

