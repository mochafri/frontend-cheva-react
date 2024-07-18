// CancelVerif.jsx
import confirmIcon from '../assets/icon/confirm.svg';

const CancelVerif = () => {
    return (
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
            <div className="wrapper w-[400px] h-[300px] rounded-md shadow-lg flex flex-col items-center gap-5 justify-center bg-white">
                <img src={confirmIcon} alt="confirm" width="100" />
                <h2 className="font-medium text-lg mb-5 w-3/4 text-center">Yakin Ingin Membatalkan Verifikasi Akun Ini?</h2>
                <div className="choise flex justify-center gap-12 w-full">
                    <button className="text-white bg-primary rounded-md px-5 py-1 w-24">Ya</button>
                    <button className="border-2 rounded-md px-5 py-1 w-24 text-primary border-primary">Tidak</button>
                </div>
            </div>
        </div>
    );
};

export default CancelVerif;
