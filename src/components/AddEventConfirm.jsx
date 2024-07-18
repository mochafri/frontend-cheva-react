import ceklisIcon from '../assets/icon/ceklis.svg';

const AddEventConfirm = () => {
    return (
        <div className="flex justify-center items-center w-full h-[100vh]">
            <div className="wrapper w-[400px] h-[300px] rounded-md shadow-lg flex flex-col items-center gap-5 justify-center">
                <img src={ceklisIcon} alt="ceklis" width="100" />
                <h2 className="font-medium text-xl mb-5 text-center w-3/4">Berhasil Menambah Kegiatan</h2>
                <div className="choise flex justify-center w-full">
                    <button className="text-white bg-primary rounded-md px-5 py-1 w-24">Close</button>
                </div>
            </div>
        </div>
    );
};

export default AddEventConfirm;
