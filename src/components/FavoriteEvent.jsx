import card1Img from '../assets/img/card1.png';
import card13Img from '../assets/img/card13.png';
import card14Img from '../assets/img/card14.png';
import filterIcon from '../assets/icon/filter.svg';
import prevIcon from '../assets/icon/prev.svg';
import nextIcon from '../assets/icon/next.svg';
import verifIcon from '../assets/icon/Verif.svg';

const FavoriteEvent = () => {
    return (
        <main id="favorite" className="px-20 py-10 ms-48">
            <h2 className="font-bold text-2xl mb-10">Kegiatan Favorit</h2>
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
                {/* Tombol Filter */}
                <div className="bg-red-700 text-white px-3 py-1 rounded-lg focus:outline-none me-5 flex justify-between gap-2">
                    <button>Terakhir Dibuat</button>
                    <img src={filterIcon} alt="filter" />
                </div>
                <div className="bg-red-700 text-white px-3 py-1 rounded-lg focus:outline-none me-5 flex justify-between gap-2">
                    <button>All Category</button>
                    <img src={filterIcon} alt="filter" />
                </div>
            </div>
            <div className="card flex mb-3 gap-2">
                {/* Kartu Kegiatan */}
                <div className="w-1/4 border shadow-md rounded-md">
                    <img src={card1Img} alt="card1" />
                    <div className="card-detail px-3 py-5">
                        <h4 className="font-bold mb-1">Festival Summer Park</h4>
                        <h5 className="text-sm mb-1">1000 Pendaftar</h5>
                        <h4 className="font-bold mb-1">8 Juli 2024</h4>
                        <div className="company flex">
                            <h4 className="font-bold me-2">HIMI Informaticans</h4>
                            <img src={verifIcon} alt="verif" />
                        </div>
                    </div>
                </div>
                <div className="w-1/4 border shadow-md rounded-md">
                    <img src={card13Img} alt="card13" />
                    <div className="card-detail px-3 py-5">
                        <h4 className="font-bold mb-1">Festival Seni dan Budaya</h4>
                        <h5 className="text-sm mb-1">350 Pendaftar</h5>
                        <h4 className="font-bold mb-1">10 Desember 2024</h4>
                        <div className="company flex">
                            <h4 className="font-bold me-2">HIMA DKV</h4>
                            <img src={verifIcon} alt="verif" />
                        </div>
                    </div>
                </div>
                <div className="w-1/4 border shadow-md rounded-md">
                    <img src={card14Img} alt="card14" />
                    <div className="card-detail px-3 py-5">
                        <h4 className="font-bold mb-1">Aksi Sosial Bersih Kampus</h4>
                        <h5 className="text-sm mb-1">400 Pendaftar</h5>
                        <h4 className="font-bold mb-1">1 Februari 2025</h4>
                        <div className="company flex">
                            <h4 className="font-bold me-2">Max Verstappen</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                {/* Pagination */}
                <div className="page flex items-center gap-5">
                    <div className="prev bg-primary inline-block p-1 rounded-md cursor-pointer">
                        <img src={prevIcon} alt="prev" />
                    </div>
                    <p>Page 1 of 1</p>
                    <div className="prev bg-primary inline-block p-1 rounded-md cursor-pointer">
                        <img src={nextIcon} alt="next" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FavoriteEvent;
