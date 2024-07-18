import { Link } from 'react-router-dom';
import '../index.css' // Import Link from react-router-dom // Import gambar background

const Forgetpw = () => {
    return (
        <div className="wrapper w-[100vw] h-[100vh] bg-cover bg-center flex items-center" style={{ backgroundColor: '#A8151C' }}>
            <div className="sign-up w-[600px] h-17/20 bg-white mx-auto rounded-md">
                <form action="" className="py-14 px-28">
                    <h1 className="text-center text-3xl font-bold text-primary mb-12">Lupa Sandi</h1>
                    <p className="block text-center mb-4">Masukkan email yang telah didaftarkan</p>
                    <label htmlFor="email" className="block mb-3 font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Masukkan email"
                        className="border-black border-1 border w-full py-2 px-2 rounded-md mb-3"
                    />
                    <div className="option flex justify-between">
                        <span className="text-center block text-[13px] mb-2">
                            Belum punya akun? <Link to="/signup" className="font-bold text-primary">Sign up</Link>
                        </span>
                        <Link to="/login" className="font-bold text-primary text-[13px] mb-12">Sign in</Link>
                    </div>

                    <button className="w-full bg-primary text-white py-2 px-2 rounded-md font-medium mb-2">Kirim Verifikasi</button>
                </form>
            </div>
        </div>
    );
};

export default Forgetpw;
