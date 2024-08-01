import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import MainContacto from '../components/Contacto/MainContacto';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Contacto = () => {
    const userActive = useSelector((state) => state.userData.userActive);
    const navigate = useNavigate();

    useEffect(() => {
        if (userActive === null) {
            navigate('/login');
        }
    }, [userActive, navigate]);

    return (
        <>
            <Header />
            <MainContacto />
            <Footer />
        </>
    );
};

export default Contacto;
