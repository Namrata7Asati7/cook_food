import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Background() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/main');
        }, 5000);
        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, [navigate]);

    return (
        <div style={{
            height: '100vh',
            background: 'url(./assets/background.jpg) center/cover no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 style={{ color: 'white', fontSize: '3rem' }}>Welcome to AI Cooking Advisor</h1>
        </div>
    );
}

export default Background;
