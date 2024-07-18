import card1 from '../assets/img/card1.png';
import card2 from '../assets/img/card2.png';
import card3 from '../assets/img/card3.png';
import card4 from '../assets/img/card4.png';
import card5 from '../assets/img/card5.png';
import card6 from '../assets/img/card6.png';
import card7 from '../assets/img/card7.png';
import card8 from '../assets/img/card8.png';
import filterIcon from '../assets/icon/filter.svg';
import verif from '../assets/icon/Verif.svg';
import '../index.css'

const Event = () => {
    return (
        <main id="home" className="px-20 py-10 ms-48">
            <h2 className="font-bold text-2xl mb-10">Kegiatan</h2>
            <div className="flex items-center space-x-2 mb-4">
                {/* Search Input */}
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
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.9 14.32a8 8 0 111.414-1.414l4.243 4.243-1.414 1.414-4.243-4.243zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <div className="filter flex mb-10">
                {/* Buttons */}
                <div className="bg-red-700 text-white px-3 py-1 rounded-lg focus:outline-none me-5 flex justify-between gap-2">
                    <button>Terakhir Dibuat</button>
                    <img src={filterIcon} alt="filter" />
                </div>
                <div className="bg-red-700 text-white px-3 py-1 rounded-lg focus:outline-none me-5 flex justify-between gap-2">
                    <button>All Category</button>
                    <img src={filterIcon} alt="filter" />
                </div>
            </div>
            <div className="card flex mb-3">
                <div className="w-1/4 border shadow-md rounded-md">
                    <img src={card1} alt="card1" />
                    <div className="card-detail px-3 py-5">
                        <h4 className="font-bold mb-1">Festival Summer Park</h4>
                        <h5 className="text-sm mb-1">1000 Pendaftar</h5>
                        <h4 className="font-bold mb-1">8 Juli 2024</h4>
                        <div className="company flex">
                            <h4 className="font-bold me-2">HIMI Informaticans</h4>
                            <img src={verif} alt="verif" />
                        </div>
                    </div>
                </div>
                <div className="w-1/4 border shadow-md rounded-md">
                    <img src={card2} alt="card2" />
                    <div className="card-detail px-3 py-5">
                        <h4 className="font-bold mb-1">Lomba Esai Teknologi</h4>
                        <h5 className="text-sm mb-1">20 Pendaftar</h5>
                        <h4 className="font-bold mb-1">10 Agustus 2024</h4>
                        <div className="company flex">
                            <h4 className="font-bold me-2">HIMA Teknik Industri</h4>
                            <img src={verif} alt="verif" />
                        </div>
                    </div>
                </div>
                <div className="w-1/4 border shadow-md rounded-md">
                    <img src={card3} alt="card3" />
                    <div className="card-detail px-3 py-5">
                        <h4 className="font-bold mb-1">Lomba Desain UI/UX</h4>
                        <h5 className="text-sm mb-1">25 Pendaftar</h5>
                        <h4 className="font-bold mb-1">30 September 2024</h4>
                        <div className="company flex">
                            <h4 className="font-bold me-2">Darth Vader</h4>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 border shadow-md rounded-md">
                    <img src={card4} alt="card4" />
                    <div className="card-detail px-3 py-5">
                        <h4 className="font-bold mb-1">Seminar Keamanan Siber</h4>
                        <h5 className="text-sm mb-1">100 Pendaftar</h5>
                        <h4 className="font-bold mb-1">5 November 2024</h4>
                        <div className="company flex">
                            <h4 className="font-bold me-2">Laboratorium Cyber Telkom</h4>
                            <img src={verif} alt="verif" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card flex">
                <div className="w-1/4 border shadow-md rounded-md">
                    <img src={card5} alt="card5" />
                    <div className="card-detail px-3 py-5">
                        <h4 className="font-bold mb-1">Artificial Intelligence Symposium</h4>
                        <h5 className="text-sm mb-1">60 Pendaftar</h5>
                        <h4 className="font-bold mb-1">7 Oktober 2024</h4>
                        <div className="company flex">
                            <h4 className="font-bold me-2">Laboratorium AI Telkom</h4>
                            <img src={verif} alt="verif" />
                        </div>
                    </div>
                </div>
                <div className="w-1/4 border shadow-md rounded-md">
                    <img src={card6} alt="card6" />
                    <div className="card-detail px-3 py-5">
                        <h4 className="font-bold mb-1">Java Coding Bootcamp</h4>
                        <h5 className="text-sm mb-1">20 Pendaftar</h5>
                        <h4 className="font-bold mb-1">18 Oktober 2024</h4>
                        <div className="company flex">
                            <h4 className="font-bold me-2">Lewis Hamilton</h4>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 border shadow-md rounded-md">
                    <img src={card7} alt="card7" />
                    <div className="card-detail px-3 py-5">
                        <h4 className="font-bold mb-1">Engineering Innovation Expo</h4>
                        <h5 className="text-sm mb-1">150 Pendaftar</h5>
                        <h4 className="font-bold mb-1">10 November 2024</h4>
                        <div className="company flex">
                            <h4 className="font-bold me-2">HIMA Teknik Mesin</h4>
                            <img src={verif} alt="verif" />
                        </div>
                    </div>
                </div>
                <div className="w-1/4 border shadow-md rounded-md">
                    <img src={card8} alt="card8" />
                    <div className="card-detail px-3 py-5">
                        <h4 className="font-bold mb-1">Entrepreneurial Leadership Forum</h4>
                        <h5 className="text-sm mb-1">200 Pendaftar</h5>
                        <h4 className="font-bold mb-1">20 November 2024</h4>
                        <div className="company flex">
                            <h4 className="font-bold me-2">HIMA Teknik Elektro</h4>
                            <img src={verif} alt="verif" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Event;
