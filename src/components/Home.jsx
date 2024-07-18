import card1 from '../assets/img/card1.png';
import card2 from '../assets/img/card2.png';
import card3 from '../assets/img/card3.png';
import card4 from '../assets/img/card4.png';
import verif from '../assets/icon/Verif.svg';
import '../index.css'

const Home = () => {
    return (
        <main id="home" className="px-20 py-10 ms-48">
            <h2 className="font-bold text-2xl mb-10">Selamat Datang, Luke Skywalker</h2>
            <h3 className="text-xl font-bold mb-10">Kegiatan Mendatang</h3>
            <div className="card flex">
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
            <button className="font-medium text-lg block mx-auto mt-10 bg-primary text-white px-5 py-1 rounded-lg">
                Lihat Semua
            </button>
        </main>
    );
};

export default Home;
