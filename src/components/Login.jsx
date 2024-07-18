import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import PropTypes
import bgImage from '../assets/img/bg.png';
import google from '../assets/icon/google.svg'; // Import gambar background

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Lakukan validasi login sesuai kebutuhan di sini
        // Misalnya, bisa validasi dengan backend atau hanya dummy login
        if (email === 'admin@example.com' && password === 'password') {
            onLogin(); // Panggil fungsi onLogin yang diterima dari prop
        } else {
            alert('Email atau password salah!');
        }
    };

    return (
        <div className="wrapper w-[100vw] h-[100vh] bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="sign-up w-[600px] h-17/20 bg-white mx-auto">
                <form onSubmit={handleLogin} className="py-10 px-32">
                    <h1 className="text-center text-3xl font-bold text-primary mb-12">Sign In</h1>
                    <label htmlFor="email" className="block mb-3 font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Masukkan email"
                        className="border-black border-1 border w-full py-2 px-2 rounded-md mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password" className="block mb-3 font-medium">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Masukkan password"
                        className="border-black border-1 border w-full py-2 px-2 rounded-md mb-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span className="text-center block font-bold text-primary text-[20px] mb-2">OR</span>
                    <button className="w-full bg-primary text-white py-2 px-2 rounded-md font-medium mb-2">
                        <img src={google} alt="google" className="inline-block me-2" /> Sign in dengan Google
                    </button>
                    <span className="text-center block text-[13px] mb-2">Belum punya akun? <Link to="/signup" className="font-bold text-primary">Sign up</Link></span>
                    <span className="text-center block text-[13px] mb-10">Lupa password? <Link to="/forgetpw" className="font-bold text-primary">Lupa sandi</Link></span>
                    <button type="submit" className="w-full bg-primary text-white py-2 px-2 rounded-md font-medium mb-2">Sign In</button>
                </form>
            </div>
        </div>
    );
};

// Prop Validation menggunakan PropTypes
Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default Login;
