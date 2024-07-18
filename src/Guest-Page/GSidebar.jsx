import { Link } from 'react-router-dom';
import guestProfile from '../assets/img/guest.png';
import homeIcon from '../assets/icon/Home.svg';
import eventIcon from '../assets/icon/Event.svg';
import logoutIcon from '../assets/icon/Out.svg';


const GSidebar = () => {
    return (
        <div className="wrapper flex w-full">
            <div className="side-bar w-[15%] bg-primary py-10 px-2 fixed top-0 left-0 h-full">
                <div className="user-profile flex flex-col items-center w-full mb-8">
                    <img src={guestProfile} alt="profile" className="w-20 h-20 rounded-full mb-3" />
                    <h4 className="text-white font-bold text-xl">Tamu</h4>
                </div>
                <div className="navigasi flex items-center p-2 rounded-md mb-2">
                    <img src={homeIcon} alt="beranda" className="me-2" />
                    <Link to="/" className="text-white font-bold text-xl">Beranda</Link>
                </div>
                <div className="navigasi flex items-center p-2 rounded-md mb-2">
                    <img src={eventIcon} alt="kegiatan" className="me-2" />
                    <Link to="/kegiatan" className="text-white font-bold text-xl">Kegiatan</Link>
                </div>
                <div className="navigasi flex items-center p-2 bg-dark rounded-md mb-2">
                    <img src={logoutIcon} alt="keluar" className="me-2" />
                    <Link to="/logout" className="text-white font-bold text-xl">Keluar</Link>
                </div>
            </div>
        </div>
    );
};

export default GSidebar;
