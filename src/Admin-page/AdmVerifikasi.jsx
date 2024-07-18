// AdmVerifikasi.jsx

import profile1 from '../assets/img/profile.png';
import profile2 from '../assets/img/profile2.png';
import profile3 from '../assets/img/profile3.png';
import profile4 from '../assets/img/profile4.png';
import fileIcon from '../assets/icon/File.svg';
import checkIcon from '../assets/icon/Check.svg';
import cancelIcon from '../assets/icon/Cancel.svg';
import '../index.css';

const profiles = [
    { img: profile1, date: '2024-07-05', username: 'Luke Skywalker' },
    { img: profile2, date: '2024-07-05', username: 'Brimstone' },
    { img: profile3, date: '2024-07-05', username: 'Cristiano Ronaldo' },
    { img: profile4, date: '2024-07-06', username: 'Judge Bellingham' }
];

const AdmVerifikasi = () => {
    return (
        <main id="home" className="px-20 py-10 ms-48">
            <h2 className="font-bold text-2xl mb-10">Verifikasi Akun</h2>
            <div className="flex items-center space-x-2 mb-10">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Pencarian..."
                        className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:ring focus:ring-red-500 focus:border-red-500 outline-none w-96"
                    />
                    <svg
                        className="w-5 h-5 absolute left-3 top-2.5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M12.9 14.32a8 8 0 111.414-1.414l4.243 4.243-1.414 1.414-4.243-4.243zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <table className="w-full border-collapse table-fixed">
                <thead>
                    <tr>
                        <th className="text-lg">Profil</th>
                        <th className="text-lg">Tanggal Meminta</th>
                        <th className="text-lg">Username</th>
                        <th className="text-lg">Status</th>
                        <th className="text-lg">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {profiles.map((profile, index) => (
                        <tr key={index} className="shadow-md border text-center">
                            <td className='p-2'>
                                <div className="flex justify-center rounded-full">
                                    <img src={profile.img} alt={`profile${index + 1}`} width="40" />
                                </div>
                            </td>
                            <td className="font-medium">{profile.date}</td>
                            <td className="font-medium">{profile.username}</td>
                            <td className="font-medium">Meminta</td>
                            <td className="flex justify-center items-center mt-3 gap-5 ">
                                <div className="file bg-primary p-1 rounded-md cursor-pointer">
                                    <img src={fileIcon} alt="file" />
                                </div>
                                <div className="check bg-[#0FC30B] p-1 rounded-md cursor-pointer">
                                    <img src={checkIcon} alt="check" />
                                </div>
                                <div className="cancel bg-[#ED1E28] p-1 rounded-md cursor-pointer">
                                    <img src={cancelIcon} alt="cancel" />
                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </main>
    );
};

export default AdmVerifikasi;
