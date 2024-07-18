import BackIcon from '../assets/icon/Back.svg';

const Verification = () => {
    return (
        <main id="Verifikasi" className="px-20 py-10 ms-48">
            <div className="judul flex items-center mb-10">
                <img src={BackIcon} alt="Back" width="30" className="me-2" />
                <h2 className="font-bold text-2xl">Verifikasi Akun</h2>
            </div>
            <div className="upload p-3 border shadow-md rounded-md mb-10">
                <h4 className="font-bold text-xl">Unggah Foto KTP</h4>
                <p className="mb-5">Unggah KTP Anda untuk diverifikasi sebagai akun terpercaya.</p>
                <button className="bg-primary text-white px-10 font-medium rounded-md me-10 py-2 w-[250px] mb-5">
                    Unggah KTP
                </button>
                <p>Pastikan foto KTP terlihat jelas dan tidak buram.</p>
            </div>
            <button className="bg-primary text-white px-10 font-medium rounded-md me-10 py-2 w-[250px] mb-5">
                Verifikasi
            </button>
        </main>
    );
};

export default Verification;
