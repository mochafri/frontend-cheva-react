import BackIcon from '../assets/icon/Back.svg';
import EventImage from '../assets/img/card9.png';
import '../index.css';

const eventDetails = [
    { label: 'Kategori', value: 'Lomba' },
    { label: 'Tanggal Mulai', value: '25 April 2024' },
    { label: 'Tanggal Selesai', value: '26 April 2024' },
    { label: 'Waktu Mulai', value: '09.00 WIB' },
    { label: 'Waktu Selesai', value: '17.00 WIB' },
    { label: 'Lokasi', value: 'Convention Hall, Telkom University' },
    { label: 'Narahubung', value: '@intergalactic_robotics (Instagram)' },
    { label: 'Jumlah Pendaftar', value: '6 Pendaftar' },
];

const MyEventDetail = () => {
    return (
        <main id="event" className="px-20 py-10 ms-48">
            <div className="judul flex items-center mb-5">
                <img src={BackIcon} alt="Back" width="30" className="me-2" />
                <h2 className="font-bold text-2xl">Detail KegiatanKu</h2>
            </div>
            <div className="detail flex">
                <div className="left me-5">
                    <img src={EventImage} alt="event1" />
                </div>
                <div className="right">
                    <h2 className="font-bold text-2xl mb-3">Intergalactic Robotics Competition</h2>
                    <p className="mb-3">
                        Kompetisi robotika terbesar di Telkom University, di mana mahasiswa dari berbagai
                        jurusan bersaing untuk menunjukkan kemampuan terbaik mereka dalam merancang dan mengendalikan
                        robot. Acara ini akan dihadiri oleh ahli robotika dan teknologi dari berbagai penjuru dunia,
                        memberikan kesempatan bagi peserta untuk belajar dan berjejaring.
                    </p>
                    {eventDetails.map(detail => (
                        <div key={detail.label} className="mb-2">
                            <strong className="inline-block w-[200px]">{detail.label} :</strong>
                            <span>{detail.value}</span>
                        </div>
                    ))}
                    <div className="flex">
                        <button className="bg-primary text-white px-10 font-medium rounded-md me-10 py-2 w-[250px] mb-5">
                            Perbarui Kegiatan
                        </button>
                        <button className="bg-primary text-white px-10 font-medium rounded-md me-10 py-2 w-[250px] mb-5">
                            Hapus Kegiatan
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MyEventDetail;
