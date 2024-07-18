import { Link } from 'react-router-dom';
import profileImage from '../assets/img/profilee.png';
import cameraIcon from '../assets/icon/camera.svg';
import penIcon from '../assets/icon/pen.svg';
import card9 from '../assets/img/card9.png';
import card10 from '../assets/img/card10.png';
import card11 from '../assets/img/card11.png';
import card12 from '../assets/img/card12.png';
import '../index.css'

const Profile = () => {
    return (
        <main id="user-profile" className="px-20 py-10 ms-48">
            <h2 className="font-bold text-2xl mb-10">Profil</h2>
            <div className="profile-detail w-full border shadow-md p-4 flex gap-8 mb-5 rounded-sm">
                <div className="profile-picture relative">
                    <div className="w-40 h-40 rounded-full">
                        <img src={profileImage} alt="profile" />
                    </div>
                    <img src={cameraIcon} alt="camera" className="absolute bottom-0 right-0" />
                </div>
                <div className="profile-name relative">
                    <div className="name flex items-center gap-2 mb-5">
                        <input type="text" defaultValue="Luke Skywalker" className="border-b border-black w-[350px]" />
                        <img src={penIcon} alt="pen" width="20" />
                    </div>
                    <div className="name flex items-center gap-2">
                        <input type="email" defaultValue="skywalker@gmail.com" className="border-b border-black w-[350px]" />
                        <img src={penIcon} alt="pen" width="20" />
                    </div>
                    <button className="font-medium text-lg mt-10 bg-primary text-white px-5 py-1 rounded-lg absolute bottom-0">
                        Ganti Password
                    </button>
                </div>
            </div>
            <div className="status w-full border shadow-md p-4 flex justify-between items-center rounded-sm mb-10">
                <p>Akun anda belum terverifikasi untuk membuat kegiatan!</p>
                <button className="font-medium text-lg bg-primary text-white px-5 py-1 rounded-lg"><Link to="/verifikasi">Verifikasi Akun</Link></button>
            </div>
            <h2 className="font-bold text-2xl mb-10">Kegiatan Yang Dibuat</h2>
            <div className="card flex mb-3 gap-2">
                <div className="w-1/4 border shadow-md rounded-md">
                    <img src={card9} alt="card9" />
                    <div className="card-detail px-3 py-5">
                        <h4 className="font-bold mb-1">Intergalactic Robotics Competition</h4>
                        <h5 className="text-sm mb-1">6 Pendaftar</h5>
                        <h4 className="font-bold mb-1">25 April 2024</h4>
                        <div className="company flex">
                            <h4 className="font-bold me-2">Luke Skywalker</h4>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 border shadow-md rounded-md">
                    <img src={card10} alt="card10" />
                    <div className="card-detail px-3 py-5">
                        <h4 className="font-bold mb-1">Galactic Coding Challenge</h4>
                        <h5 className="text-sm mb-1">15 Pendaftar</h5>
                        <h4 className="font-bold mb-1">5 Februari 2024</h4>
                        <div className="company flex">
                            <h4 className="font-bold me-2">Luke Skywalker</h4>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 border shadow-md rounded-md">
                    <img src={card11} alt="card11" />
                    <div className="card-detail px-3 py-5">
                        <h4 className="font-bold mb-1">Star Wars Tech Summit</h4>
                        <h5 className="text-sm mb-1">10 Pendaftar</h5>
                        <h4 className="font-bold mb-1">12 Maret 2024</h4>
                        <div className="company flex">
                            <h4 className="font-bold me-2">Luke Skywalker</h4>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 border shadow-md rounded-md">
                    <img src={card12} alt="card12" />
                    <div className="card-detail px-3 py-5">
                        <h4 className="font-bold mb-1">Space Innovation Forum</h4>
                        <h5 className="text-sm mb-1">0 Pendaftar</h5>
                        <h4 className="font-bold mb-1">30 Mei 2024</h4>
                        <div className="company flex">
                            <h4 className="font-bold me-2">Luke Skywalker</h4>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;
