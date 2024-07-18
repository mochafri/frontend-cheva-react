import '../index.css'

const AddEvent = () => {
    return (
        <main id="home" className="px-20 py-10 ms-48">
            <h2 className="font-bold text-2xl mb-10">Tambah Kegiatan</h2>
            <div className="add-event flex gap-5 overflow-hidden">
                <form className="left flex-1">
                    <label htmlFor="kegiatan" className="font-bold">Nama Kegiatan</label>
                    <input
                        type="text"
                        id="kegiatan"
                        name="kegiatan"
                        className="mt-2 border border-black w-full px-2 py-[5px] rounded-md text-sm mb-3"
                        placeholder="Nama..."
                    />
                    <label htmlFor="deskripsi" className="font-bold">Deskripsi Kegiatan</label>
                    <textarea
                        name="deskripsi"
                        id="deskripsi"
                        className="w-full h-[200px] border border-black rounded-md px-2 py-[5px] text-sm mt-2 mb-3"
                        placeholder="Deskripsi..."
                    />
                    <label htmlFor="kategori" className="font-bold">Kategori Kegiatan</label>
                    <div className="categories flex w-3/4 gap-9 mt-3 mb-3 ms-1">
                        <div className="left">
                            <div className="kategori flex items-center mb-2">
                                <input type="checkbox" className="me-2 transform scale-150" /><span>Konser</span>
                            </div>
                            <div className="kategori flex items-center mb-2">
                                <input type="checkbox" className="me-2 transform scale-150" /><span>Seminar</span>
                            </div>
                            <div className="kategori flex items-center mb-2">
                                <input type="checkbox" className="me-2 transform scale-150" /><span>Talkshow</span>
                            </div>
                            <div className="kategori flex items-center mb-2">
                                <input type="checkbox" className="me-2 transform scale-150" /><span>Festival</span>
                            </div>
                        </div>
                        <div className="center">
                            <div className="kategori flex items-center mb-2">
                                <input type="checkbox" className="me-2 transform scale-150" /><span>Bazar</span>
                            </div>
                            <div className="kategori flex items-center mb-2">
                                <input type="checkbox" className="me-2 transform scale-150" /><span>Workshop</span>
                            </div>
                            <div className="kategori flex items-center mb-2">
                                <input type="checkbox" className="me-2 transform scale-150" /><span>Lomba</span>
                            </div>
                            <div className="kategori flex items-center mb-2">
                                <input type="checkbox" className="me-2 transform scale-150" /><span>Pameran</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="kategori flex items-center mb-2">
                                <input type="checkbox" className="me-2 transform scale-150" /><span>Wisuda</span>
                            </div>
                            <div className="kategori flex items-center mb-2">
                                <input type="checkbox" className="me-2 transform scale-150" /><span>PKKMB</span>
                            </div>
                            <div className="kategori flex items-center mb-2">
                                <input type="checkbox" className="me-2 transform scale-150" /><span>Kuliah Umum</span>
                            </div>
                            <div className="kategori flex items-center mb-2">
                                <input type="checkbox" className="me-2 transform scale-150" /><span>Kegiatan Sosial</span>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="poster" className="font-bold">Unggah Poster</label>
                    <p className="text-[12px] mb-3">Untuk mendapatkan gambar yang optimal, gunakan ukuran ratio 4:5 atau 1080px x 1350px</p>
                    <div className="flex flex-col">
                        <button className="bg-primary text-white px-10 font-medium rounded-md me-10 py-2 w-[250px] mb-20">Unggah Poster</button>
                        <button className="bg-primary text-white px-10 font-medium rounded-md me-10 py-2 w-[250px]">Tambah Kegiatan</button>
                    </div>
                </form>
                <form className="right flex-1">
                    <label htmlFor="tgl-mulai" className="font-bold">Tanggal Mulai</label>
                    <input
                        type="date"
                        id="tgl-mulai"
                        name="tgl-mulai"
                        className="mt-2 border border-black w-full px-2 py-[5px] rounded-md text-sm mb-3"
                    />
                    <label htmlFor="tgl-selesai" className="font-bold">Tanggal Selesai</label>
                    <input
                        type="date"
                        id="tgl-selesai"
                        name="tgl-selesai"
                        className="mt-2 border border-black w-full px-2 py-[5px] rounded-md text-sm mb-3"
                    />
                    <label htmlFor="wkt-mulai" className="font-bold">Waktu Mulai</label>
                    <input
                        type="time"
                        id="wkt-mulai"
                        name="wkt-mulai"
                        className="mt-2 border border-black w-full px-2 py-[5px] rounded-md text-sm mb-3"
                    />
                    <label htmlFor="wkt-selesai" className="font-bold">Waktu Selesai</label>
                    <input
                        type="time"
                        id="wkt-selesai"
                        name="wkt-selesai"
                        className="mt-2 border border-black w-full px-2 py-[5px] rounded-md text-sm mb-3"
                    />
                    <label htmlFor="lokasi" className="font-bold">Lokasi</label>
                    <input
                        type="text"
                        id="lokasi"
                        name="lokasi"
                        className="mt-2 border border-black w-full px-2 py-[5px] rounded-md text-sm mb-3"
                        placeholder="Masukkan alamat kegiatan"
                    />
                    <label htmlFor="narahubung" className="font-bold">Narahubung</label>
                    <input
                        type="text"
                        id="narahubung"
                        name="narahubung"
                        className="mt-2 border border-black w-full px-2 py-[5px] rounded-md text-sm mb-3"
                        placeholder="WA, IG, Telegram, Line..."
                    />
                    <label htmlFor="link-daftar" className="font-bold">Link Pendaftaran</label>
                    <input
                        type="text"
                        id="link-daftar"
                        name="link-daftar"
                        className="mt-2 border border-black w-full px-2 py-[5px] rounded-md text-sm mb-3"
                        placeholder="Link pendaftaran kegiatan..."
                    />
                </form>
            </div>
        </main>
    );
};

export default AddEvent;
