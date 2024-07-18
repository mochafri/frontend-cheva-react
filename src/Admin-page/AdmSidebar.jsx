import { Link } from 'react-router-dom';
import ProfileImg from '../assets/img/profile.png';
import VerifIcon from '../assets/icon/verif2.svg';
import KelolaIcon from '../assets/icon/kelola.svg';
import OutIcon from '../assets/icon/Out.svg';

const AdmSidebar = () => {
    return (
        <div className="wrapper flex w-full">
            <div className="side-bar w-[15%] bg-primary py-10 px-2 h-full fixed top-0 left-0">
                <div className="user-profile flex flex-col items-center w-full mb-8">
                    <img src={ProfileImg} alt="profile" className="w-20 h-20 rounded-full mb-3" />
                    <h4 className="text-white font-bold text-xl">Admin</h4>
                </div>
                <div className="navigasi flex items-center p-2 rounded-md mb-2">
                    <img src={VerifIcon} alt="verifikasi" className="me-2" />
                    <Link to="verifikasi" className="text-white font-bold text-xl">Verifikasi</Link>
                </div>
                <div className="navigasi flex items-center p-2 rounded-md mb-2">
                    <img src={KelolaIcon} alt="pengelolaan" className="me-2" />
                    <Link to="pengelolaan" className="text-white font-bold text-xl">Pengelolaan</Link>
                </div>
                <div className="navigasi flex items-center p-2 bg-dark rounded-md mb-2">
                    <img src={OutIcon} alt="keluar" className="me-2" />
                    <Link to="#" className="text-white font-bold text-xl">Keluar</Link>
                </div>
            </div>
        </div>
    );
}

export default AdmSidebar;
