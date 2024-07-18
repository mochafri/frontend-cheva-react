// AdmKelola.jsx

import filterIcon from '../assets/icon/filter.svg';
import fileIcon from '../assets/icon/File.svg';
import moreIcon from '../assets/icon/More.svg';
import '../index.css';

const accounts = [
    { id: 1, username: 'Luke Skywalker', date: '2024-07-05', status: 'Terverifikasi', activities: 3 },
    { id: 2, username: 'Max Verstappen', date: '2024-07-03', status: 'Tidak Terverifikasi', activities: 2 },
    { id: 3, username: 'Darth Vader', date: '2024-07-01', status: 'Terverifikasi', activities: 15 },
    { id: 4, username: 'HIMA Teknik Industri', date: '2024-07-11', status: 'Terverifikasi', activities: 9 },
    { id: 5, username: 'Fernando Alonso', date: '2024-07-12', status: 'Tidak Terverifikasi', activities: 5 },
    { id: 6, username: 'HIMA Teknik Elektro', date: '2024-07-08', status: 'Terverifikasi', activities: 8 }
];

const AdmKelola = () => {
    return (
        <main id="kelola-akun" className="px-20 py-10 ms-48">
            <h2 className="font-bold text-2xl mb-10">Pengelolaan Akun</h2>
            <div className="flex items-center space-x-2 mb-5">
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
            <div className="filter flex mb-10">
                {['Terverifikasi', 'Terakhir Dibuat'].map((text, index) => (
                    <div key={index} className="bg-red-700 text-white px-3 py-1 rounded-lg focus:outline-none me-5 flex justify-between gap-2">
                        <button>{text}</button>
                        <img src={filterIcon} alt="filter" />
                    </div>
                ))}
            </div>
            <table className="w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Username</th>
                        <th>Tanggal Daftar</th>
                        <th>Status</th>
                        <th>Total Kegiatan</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account, index) => (
                        <tr key={account.id} className="shadow-md border">
                            <td className="font-medium">{index + 1}</td>
                            <td className="font-medium">{account.username}</td>
                            <td className="font-medium">{account.date}</td>
                            <td className="font-medium">{account.status}</td>
                            <td className="font-medium">{account.activities}</td>
                            <td className="flex justify-center gap-5">
                                {[fileIcon, moreIcon].map((icon, i) => (
                                    <div key={i} className="bg-primary p-1 rounded-md cursor-pointer">
                                        <img src={icon} alt={icon === fileIcon ? 'file' : 'more'} />
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default AdmKelola;
