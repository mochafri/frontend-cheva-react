import confirmIcon from '../assets/icon/confirm.svg';

const FeedbackConfirm = () => {
    return (
        <div className="flex justify-center items-center w-full h-[100vh]">
            <div className="wrapper w-[400px] h-[300px] rounded-md shadow-lg flex flex-col items-center gap-5 justify-center">
                <img src={confirmIcon} alt="confirm" width="100" />
                <h2 className="font-medium text-lg mb-5 w-3/4 text-center">
                    Apakah sebelumnya Anda mengikuti kegiatan
                    <span className="font-bold text-primary"> Festival Summer Park?</span>
                </h2>
                <div className="choise flex justify-center gap-12 w-full">
                    <button className="text-white bg-primary rounded-md px-5 py-1 w-24">Ya</button>
                    <button className="border-2 rounded-md px-5 py-1 w-24 text-primary border-primary">Tidak</button>
                </div>
            </div>
        </div>
    );
};

export default FeedbackConfirm;
