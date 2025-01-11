import { useLocation, useNavigate } from 'react-router-dom';

/* icons */
import payment from '../assets/icons/payment.png';
import home from '../assets/icons/home.png';
import mypage from '../assets/icons/mypage.png';

const BottomTab = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = path => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken && (path === '/' || path === '/payment')) {
            alert('로그인이 필요합니다.');
            navigate('/mypage');
        } else {
            navigate(path);
        }
    };

    return (
        <div className="bottom-tab">
            <div
                onClick={() => handleNavigation('/payment')}
                style={{
                    textDecoration: 'none',
                    color: location.pathname === '/payment' ? '#007BFF' : '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}
            >
                <img src={payment} alt="Payment" style={{ height: '24px' }} />
                <div>Payment</div>
            </div>
            <div
                onClick={() => handleNavigation('/')}
                style={{
                    textDecoration: 'none',
                    color: location.pathname === '/' ? '#007BFF' : '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}
            >
                <img src={home} alt="Home" style={{ height: '24px' }} />
                <div>Home</div>
            </div>
            <div
                onClick={() => handleNavigation('/mypage')}
                style={{
                    textDecoration: 'none',
                    color: location.pathname === '/mypage' ? '#007BFF' : '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}
            >
                <img src={mypage} alt="Mypage" style={{ height: '24px' }} />
                <div>My Page</div>
            </div>
        </div>
    );
};

export default BottomTab;
