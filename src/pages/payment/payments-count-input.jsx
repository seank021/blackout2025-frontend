import React, { useRef, useEffect, useState } from 'react';
import backBtn from '../../assets/icons/backBtn.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function PaymentsCountInput() {
    const navigate = useNavigate();

    const inputRef = useRef(null);

    const [credit, setCredit] = useState(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.style.outline = 'none';
        }
    }, []);

    const { place, privateKey } = useLocation().state;

    const onClickNext = () => {
        if (inputRef.current.value === '') {
            alert('얼마를 선결제할까요?');
            return;
        }

        navigate('/payment/select-store-type', { state: { place: place, credit: credit, privateKey: privateKey } });
    };

    return (
        <div className="container-col">
            <img className="absolute top-[20px] left-[20px]" src={backBtn} alt="logo" onClick={() => navigate(-1)} />
            <div className="flex items-center justify-center gap-[100px] mt-[25px]">
                <div className="text-black text-lg font-bold font-['Inter'] leading-7 mt-[2px]">선결제하기</div>
            </div>
            <div className="w-[100vw] h-[86vh] items-center justify-center flex-col gap-[41px] inline-flex">
                <div className="self-stretch h-[150px] flex-col justify-start items-center gap-[17px] inline-flex">
                    <div className="h-[101px] flex-col justify-start items-start gap-[18px] flex">
                        <div className="self-stretch justify-start items-center gap-[5px] inline-flex">
                            <div>
                                <span className="text-black text-2xl font-bold font-['Inter'] leading-7 mr-[5px]">
                                    {place.place_name}
                                </span>
                                <span className="text-black text-lg font-normal font-['Inter'] leading-7">에</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <input
                                onChange={e => setCredit(e.target.value)}
                                className="w-[80vw] rounded-[12px] border-gray-400 self-stretch text-[24px] font-bold font-['Inter'] leading-7 py-[10px]"
                                placeholder="얼마를 선결제할까요?"
                                ref={inputRef}
                            />
                            <div className="text-black text-[24px] font-normal font-['Inter'] font-bold leading-7">
                                원
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[80vw] h-10 relative ">
                    <div
                        className="w-[100%] h-10 left-0 top-0 absolute bg-[#c4dcf7] rounded-[10px] flex items-center justify-center text-black text-center font-['Inter'] text-[12px] font-bold"
                        onClick={onClickNext}
                    >
                        다음
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentsCountInput;
