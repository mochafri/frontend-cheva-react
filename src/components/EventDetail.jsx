import BackIcon from '../assets/icon/Back.svg';
import CardImage from '../assets/img/card1.png';
import VerifIcon from '../assets/icon/Verif.svg';
import LoveIcon from '../assets/icon/love-2.svg';

const EventDetail = () => {
    const eventDetails = [
        { label: 'Kategori', value: 'Festival' },
        { label: 'Tanggal Mulai', value: '8 Juni 2024' },
        { label: 'Tanggal Selesai', value: '9 Juni 2024' },
        { label: 'Waktu Mulai', value: '10.00 WIB' },
        { label: 'Waktu Selesai', value: '19.00 WIB' },
        { label: 'Lokasi', value: 'GSG, Telkom University' },
        { label: 'Narahubung', value: '@himi_informatikans (Instagram)' },
        { label: 'Jumlah Pendaftar', value: '1000 Pendaftar' },
    ];

    return (
        <main id="event" className="px-20 py-10 ms-48">
            <div className="judul flex items-center mb-5">
                <img src={BackIcon} alt="Kembali" width="30" className="me-2" />
                <h2 className="font-bold text-2xl">Detail Kegiatan</h2>
            </div>
            <div className="detail flex">
                <div className="left me-5">
                    <img src={CardImage} alt="event1" />
                </div>
                <div className="right">
                    <h2 className="font-bold text-2xl mb-3">Festival Summer Park</h2>
                    <p className="mb-3">
                        Festival terbesar yang dibuat untuk mahasiswa FIF selama ujian akhir semester
                        berlangsung. Acara ini mencakup berbagai kegiatan hiburan seperti stand makanan, konser musik, dan pameran seni.
                        Festival ini bertujuan untuk memberikan kesempatan bagi mahasiswa untuk bersantai dan menikmati waktu bersama teman-teman setelah menghadapi tekanan ujian. Selain itu, festival ini juga
                        menjadi ajang untuk menampilkan kreativitas dan bakat-bakat terpendam dari mahasiswa melalui
                        berbagai pertunjukan dan kegiatan interaktif.
                    </p>
                    {eventDetails.map((detail, index) => (
                        <div className="mb-2" key={index}>
                            <strong className="inline-block w-[200px]">{detail.label} :</strong>
                            <span>{detail.value}</span>
                        </div>
                    ))}
                    <div className="mb-7 flex">
                        <strong className="inline-block w-[200px]">Penyelenggara :</strong>
                        <div className="flex">
                            <span className="me-2">HIMI Informaticans</span>
                            <img src={VerifIcon} alt="verif" />
                        </div>
                    </div>
                    <div className="flex">
                        <button className="bg-primary text-white px-10 font-medium rounded-md me-10">Daftar</button>
                        <img src={LoveIcon} alt="love" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default EventDetail;
