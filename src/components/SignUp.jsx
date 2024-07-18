import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import bgImage from '../assets/img/bg.png';
import google from '../assets/icon/google.svg';
import '../index.css'

const SignUp = ({ onSignUp }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();

        // Validasi input username, email, dan password
        if (!username || !email || !password) {
            setError('Semua kolom harus diisi');
            return;
        }

        // Lakukan proses sign up sesuai kebutuhan aplikasi
        // Contoh sederhana, lakukan sign up dengan data dummy
        const newUser = { username, email, password }; // Data pengguna baru

        // Simulasikan pengiriman data newUser ke backend atau penyimpanan data
        console.log('Pengguna baru:', newUser);

        // Panggil fungsi onSignUp yang diterima dari prop
        onSignUp();

        // Reset form setelah sign up berhasil (opsional)
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="wrapper w-[100vw] h-[100vh] bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="sign-up w-[600px] h-17/20 bg-white mx-auto rounded-md">
                <form onSubmit={handleSignUp} className="py-14 px-28">
                    <h1 className="text-center text-3xl font-bold text-primary mb-12">Sign Up</h1>
                    {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                    <label htmlFor="username" className="block mb-3 font-medium">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Masukkan username"
                        className="border-black border-1 border w-full py-2 px-2 rounded-md mb-3"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
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
                        <img src={google} alt="google" className="inline-block me-2" /> Sign up dengan Google
                    </button>
                    <span className="text-center block text-[13px] mb-10">Sudah punya akun? <Link to="/login" className="font-bold text-primary">Sign in</Link></span>
                    <button type="submit" className="w-full bg-primary text-white py-2 px-2 rounded-md font-medium mb-2">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

// Prop Validation menggunakan PropTypes
SignUp.propTypes = {
    onSignUp: PropTypes.func.isRequired,
};

export default SignUp;
