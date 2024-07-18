import { useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/img/profile.png'; // Sesuaikan path ini dengan struktur proyek Anda
import homeIcon from '../assets/icon/Home.svg';
import eventIcon from '../assets/icon/Event.svg';
import addIcon from '../assets/icon/Add.svg';
import profileIcon from '../assets/icon/Profile.svg';
import loveIcon from '../assets/icon/Love.svg';
import outIcon from '../assets/icon/Out.svg';
import ConfirmIcon from '../assets/icon/confirm.svg';
import '../index.css';

function Sidebar() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleLogoutClick = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div className="wrapper flex w-full">
            <div className="side-bar w-[15%] bg-primary py-10 px-2 fixed top-0 left-0 h-full">
                <div className="user-profile flex flex-col items-center w-full mb-8">
                    <img src={profileImage} alt="profile" className="w-20 h-20 rounded-full mb-3" />
                    <h4 className="text-white font-bold text-xl">Luke Skywalker</h4>
                </div>
                <div className="navigasi flex items-center p-2 rounded-md mb-2">
                    <img src={homeIcon} alt="beranda" className="me-2" />
                    <Link to="/" className="text-white font-bold text-xl">Beranda</Link>
                </div>
                <div className="navigasi flex items-center p-2 rounded-md mb-2">
                    <img src={eventIcon} alt="kegiatan" className="me-2" />
                    <Link to="/kegiatan" className="text-white font-bold text-xl">Kegiatan</Link>
                </div>
                <div className="navigasi flex items-center justify-start p-2 rounded-md mb-2">
                    <img src={addIcon} alt="tambah" className="me-2" />
                    <Link to="/tambah-kegiatan" className="text-white font-bold text-xl">Tambah Kegiatan</Link>
                </div>
                <div className="navigasi flex items-center p-2 rounded-md mb-2">
                    <img src={profileIcon} alt="profile" className="me-2" />
                    <Link to="/profile" className="text-white font-bold text-xl">Profile</Link>
                </div>
                <div className="navigasi flex items-center p-2 rounded-md mb-2">
                    <img src={loveIcon} alt="favorit" className="me-2" />
                    <Link to="/favorite-event" className="text-white font-bold text-xl">Kegiatan Favorit</Link>
                </div>
                <div className="navigasi flex items-center p-2 bg-dark rounded-md mb-2 logout-button">
                    <img src={outIcon} alt="keluar" className="me-2" />
                    <button onClick={handleLogoutClick} className="text-white font-bold text-xl">Keluar</button>
                </div>
            </div>
            {isPopupVisible && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-white rounded-md shadow-lg flex flex-col items-center gap-5 justify-center">
                        <img src={ConfirmIcon} alt="confirm" width="100" />
                        <h2 className="font-medium text-xl mb-5">Yakin Ingin Keluar?</h2>
                        <div className="choise flex justify-center gap-12 w-full">
                            <button className="text-white bg-primary rounded-md px-5 py-1 w-24">Ya</button>
                            <button className="border-2 rounded-md px-5 py-1 w-24 text-primary border-primary" onClick={handleClosePopup}>Tidak</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
