// AdmProfile.jsx
import backIcon from '../assets/icon/Back.svg';
import profileImg from '../assets/img/profilee.png';
import verifIcon from '../assets/icon/Verif.svg';
import card1 from '../assets/img/card1.png';
import card2 from '../assets/img/card2.png';
import card3 from '../assets/img/card3.png';
import card4 from '../assets/img/card4.png';

const profile = {
    username: 'Luke Skywalker',
    date: '2024-07-05',
    status: 'Belum Terverifikasi'
};

const activities = [
    { img: card1, title: 'Festival Summer Park', registrants: 1000, date: '8 Juli 2024', organizer: 'HIMI Informaticans', verified: true },
    { img: card2, title: 'Lomba Esai Teknologi', registrants: 20, date: '10 Agustus 2024', organizer: 'HIMA Teknik Industri', verified: true },
    { img: card3, title: 'Lomba Desain UI/UX', registrants: 25, date: '30 September 2024', organizer: 'Darth Vader', verified: false },
    { img: card4, title: 'Seminar Keamanan Siber', registrants: 100, date: '5 November 2024', organizer: 'Laboratorium Cyber Telkom', verified: true }
];

const AdmProfile = () => {
    return (
        <main id="admin-profile" className="px-20 py-10 w-full ms-52">
            <div className="judul flex items-center mb-5">
                <img src={backIcon} alt="Back" width="30" className="me-2" />
                <h2 className="font-bold text-2xl">Detail Akun</h2>
            </div>
            <div className="profile-detail border shadow-md p-4 mb-5 rounded-sm w-[750px]">
                <div className="flex gap-8">
                    <div className="profile-picture relative">
                        <div className="w-40 h-40 rounded-full">
                            <img src={profileImg} alt="profile" />
                        </div>
                    </div>
                    <div className="profile-name relative flex flex-col justify-between">
                        {['Username', 'Tanggal Daftar', 'Status'].map((label, index) => (
                            <div key={index} className="mb-2">
                                <strong className="inline-block w-[150px] text-xl">{label}</strong>
                                <span className="text-xl font-medium">: {profile[label.toLowerCase().replace(' ', '')]}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="button flex mt-5">
                    {['Hapus Akun', 'Hapus Verifikasi', 'File KTP/KTM'].map((text, index) => (
                        <button key={index} className="bg-primary text-white px-10 font-medium rounded-md me-10 py-2 w-[250px] mb-5">{text}</button>
                    ))}
                </div>
            </div>
            <h2 className="font-bold text-2xl mb-5">Kegiatan Yang Ditambahkan</h2>
            <div className="card flex mb-5 gap-2">
                {activities.map((activity, index) => (
                    <div key={index} className="w-1/4 border shadow-md rounded-md">
                        <img src={activity.img} alt={`card${index + 1}`} />
                        <div className="card-detail px-3 py-5">
                            <h4 className="font-bold mb-1">{activity.title}</h4>
                            <h5 className="text-sm mb-1">{activity.registrants} Pendaftar</h5>
                            <h4 className="font-bold mb-1">{activity.date}</h4>
                            <div className="company flex">
                                <h4 className="font-bold me-2">{activity.organizer}</h4>
                                {activity.verified && <img src={verifIcon} alt="verif" />}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default AdmProfile;
