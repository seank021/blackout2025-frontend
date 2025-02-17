import React, { useEffect } from 'react';
import Lottie from 'react-lottie-player';
import { Link, useNavigate } from 'react-router-dom';

import '../../../src/styles/globals.css';
import '../../../src/styles/home.css';
import logo from '../../assets/icons/logo-home.svg';
import arrow from '../../assets/icons/right-arrow.svg';
import folder from '../../assets/animations/folder.json';
import free from '../../assets/animations/free.json';
import lock from '../../assets/animations/lock.json';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            navigate('/mypage'); // accessToken이 없으면 MyPage로 리디렉션
        }
    }, [navigate]);

    return (
        <div className="home-container">
            {/* Logo */}
            <div className="logo-container">
                <img src={logo} alt="PrePay Logo" className="logo" />
            </div>
            <p className="sub-text">신뢰로 이어지는 따뜻한 연결</p>

            {/* Cards */}
            <div className="card-container">
                {/* My Store */}
                <Link className="large-card" to="/my-store">
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <h2 className="card-title-big">마이 스토어</h2>
                            <img src={arrow} alt="Arrow" className="w-[12px] h-[24px] ml-[5px]" />
                        </div>
                        <p className="card-text-big mt-[7px]">
                            이미 내가 등록한 매장으로,{'\n'}자유롭게 사용이 가능해요!
                        </p>
                    </div>
                    <Lottie
                        animationData={folder}
                        play
                        loop={false}
                        speed={0.8}
                        style={{ width: '110px', height: '110px' }}
                    />
                </Link>

                {/* Small Cards */}
                <div className="small-card-container">
                    <Link className="small-card" to="/public-store">
                        <div className="flex flex-col w-[100%]">
                            <div className="flex items-center mb-[3px]">
                                <h2 className="card-title-small">퍼블릭 스토어</h2>
                                <img src={arrow} alt="Arrow" className="w-[12px] h-[24px] ml-[5px]" />
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="card-text-small">
                                    비밀번호 없이{'\n'}모두가 자유롭게{'\n'}이용 가능해요!{'\n'}
                                </p>
                                <Lottie
                                    animationData={free}
                                    play
                                    loop={false}
                                    speed={0.8}
                                    style={{ width: '40px', height: '40px' }}
                                />
                            </div>
                        </div>
                    </Link>
                    <Link className="small-card" to="/private-store">
                        <div className="flex flex-col w-[100%]">
                            <div className="flex items-center mb-[3px]">
                                <h2 className="card-title-small">프라이빗 스토어</h2>
                                <img src={arrow} alt="Arrow" className="w-[12px] h-[24px] ml-[5px]" />
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="card-text-small">
                                    비밀번호를 입력해야{'\n'}이용 가능해요!{'\n'}
                                </p>
                                <Lottie
                                    animationData={lock}
                                    play
                                    loop={false}
                                    speed={0.8}
                                    style={{ width: '45px', height: '45px' }}
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
