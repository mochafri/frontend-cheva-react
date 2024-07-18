
const NewPw = () => {
    return (
        <div className="wrapper bg-cover bg-center flex items-center w-[100vw] h-[100vh] bg-[#A8151C]">
            <div className="sign-up w-[600px] h-17/20 bg-white mx-auto rounded-md">
                <form action="" className="py-14 px-28">
                    <h1 className="text-center text-3xl font-bold text-primary mb-12">Lupa Sandi</h1>
                    <p className="block text-center mb-4">Masukkan Kata Sandi Baru</p>
                    <label htmlFor="password" className="block mb-3 font-medium">Password Baru</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Masukkan password baru"
                        className="border-black border-1 border w-full py-2 px-2 rounded-md mb-3"
                    />
                    <label htmlFor="password-confirm" className="block mb-3 font-medium">Ulangi Password Baru</label>
                    <input
                        type="password"
                        id="password-confirm"
                        name="password-confirm"
                        placeholder="Ulangi password"
                        className="border-black border-1 border w-full py-2 px-2 rounded-md mb-12"
                    />
                    <button className="w-full bg-primary text-white py-2 px-2 rounded-md font-medium mb-2">Simpan</button>
                </form>
            </div>
        </div>
    );
}

export default NewPw;
